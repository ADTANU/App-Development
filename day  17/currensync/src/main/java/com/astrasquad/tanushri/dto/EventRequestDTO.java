package com.astrasquad.tanushri.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventRequestDTO {
	private String name;
    private String description;
    private String fromCurrency;
    private String toCurrency;
    private String date;
    private Double amount;
}