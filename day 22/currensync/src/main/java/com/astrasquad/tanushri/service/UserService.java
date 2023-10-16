package com.astrasquad.tanushri.service;

import org.springframework.stereotype.Service;

import com.astrasquad.tanushri.dto.UserResponseDto;

@Service
public interface UserService {

    UserResponseDto getAllUser();

}
