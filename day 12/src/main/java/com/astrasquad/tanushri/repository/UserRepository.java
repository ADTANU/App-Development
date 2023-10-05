package com.astrasquad.tanushri.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.astrasquad.tanushri.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{
	Optional<User> findByUsername(String email);
}
