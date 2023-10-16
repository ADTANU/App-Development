package com.astrasquad.tanushri.dto;

import lombok.Data;

@Data
public class ConversionRequest {

    private String fromCurrency;
    private String toCurrency;
    private double amount;
    private boolean transactionStatus;
    // Other fields, getters, and setters as needed
}
