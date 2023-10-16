package com.astrasquad.tanushri.controller;

import lombok.AllArgsConstructor;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String address;
    private String phone;
    private String email;
    private String username;
    private String password;
}
