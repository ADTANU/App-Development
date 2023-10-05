package com.astrasquad.tanushri.service;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.astrasquad.tanushri.config.AuthenticationResponse;
import com.astrasquad.tanushri.controller.AuthenticationRequest;
import com.astrasquad.tanushri.controller.RegisterRequest;
import com.astrasquad.tanushri.model.User;
import com.astrasquad.tanushri.model.enumerated.Role;
import com.astrasquad.tanushri.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserRepository repo;
    public AuthenticationResponse register(RegisterRequest request) {
        var user =User.builder()
        		.firstname(request.getFirstname())
        		.lastname(request.getLastname())
        		.username(request.getUsername())
        		.password(passwordEncoder.encode(request.getPassword()))
        		.role(Role.User)
        		.build();
        repo.save(user);
        var jwtToken=jwtService.generateToken(user);
        return AuthenticationResponse.builder()
        		.token(jwtToken)
        		.build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request){
      
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                		request.getUsername(),request.getPassword()
                		)
            );
            var user = repo.findByUsername(request.getUsername())
                .orElseThrow();
            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
     
    }

}