package com.astrasquad.tanushri.dto;




import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DepositResponse {
	private Long did;
	private String holderName;
	private Integer anumber;
	private String accName;
	private Date ddate;
	private String dnotes;
	private Integer dphone;
	private String dctype;
	private Integer damount;
}
