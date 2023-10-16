package com.astrasquad.tanushri.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExchangeRequestDTO {
	private String currency;
	private Double value1;
	private String change1;
}
