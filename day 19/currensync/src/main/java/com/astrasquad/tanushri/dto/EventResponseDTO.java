package com.astrasquad.tanushri.dto;

import java.util.List;

import com.astrasquad.tanushri.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventResponseDTO {
    private Integer transactionID;
    private String name;
    private String description;
    private String fromCurrency;
    private String toCurrency;
    private String date;
    private Double amount;
}