package com.astrasquad.tanushri.dto;

import java.util.Date;

import lombok.Data;

@Data
public class WithdrawalResponse {
    private Long wid;
    private double amount;
    private String currencyType;
    private String notes;
    private Date transactionDate;
    private String username; // Assuming you want to include the username of the user who made the withdrawal
    // Other fields, getters, and setters as needed
}

