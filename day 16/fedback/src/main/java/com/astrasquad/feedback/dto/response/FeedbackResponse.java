package com.astrasquad.feedback.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class FeedbackResponse {
	private Long feedbackId;
	private String feedbackName;
	private Integer userId;

}
