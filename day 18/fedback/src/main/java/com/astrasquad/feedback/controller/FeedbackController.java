package com.astrasquad.feedback.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.astrasquad.feedback.dto.request.FeedbackRequest;
import com.astrasquad.feedback.dto.response.FeedbackResponse;
import com.astrasquad.feedback.model.Feedback;
import com.astrasquad.feedback.service.FeedbackService;
@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/post")
    public ResponseEntity<FeedbackResponse> createFeedback(@RequestBody FeedbackRequest feedbackRequest) {
        Feedback feedback = new Feedback();
        feedback.setFeedbackName(feedbackRequest.getFeedbackName());
        feedback.setUserId(feedbackRequest.getUserId());
        Feedback createdfeedback = feedbackService.createFeedback(feedback);
        FeedbackResponse responseDTO = new FeedbackResponse();
        responseDTO.setFeedbackId(createdfeedback.getFeedbackId());
        responseDTO.setFeedbackName(createdfeedback.getFeedbackName());
        responseDTO.setUserId(createdfeedback.getUserId());
        // Set other relevant fields

        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping("/get/{feedbackId}")
    public ResponseEntity<FeedbackResponse> getFeedback(@PathVariable Long feedbackID) {
        Feedback feedback = feedbackService.getFeedbackById(feedbackID);
        FeedbackResponse responseDTO = new FeedbackResponse();
        responseDTO.setFeedbackId(feedback.getFeedbackId());
        responseDTO.setFeedbackName(feedback.getFeedbackName());
        responseDTO.setUserId(feedback.getUserId());
        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping("/get")
    public ResponseEntity<List<FeedbackResponse>> getAllFeedbacks() {
        List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
        List<FeedbackResponse> responseDTOs = feedbacks.stream()
                .map(feedback -> {
                    FeedbackResponse responseDTO = new FeedbackResponse();
                    responseDTO.setFeedbackId(feedback.getFeedbackId());
                    responseDTO.setFeedbackName(feedback.getFeedbackName());
                    responseDTO.setUserId(feedback.getUserId());
                    return responseDTO;
                })
                .collect(Collectors.toList());
        return ResponseEntity.ok(responseDTOs);
    }

    @PutMapping("/put/{feedbackId}")
    public ResponseEntity<FeedbackResponse> updateFeedback(@PathVariable Long feedbackId, @RequestBody FeedbackRequest feedbackRequestDTO) {
        Feedback existingFeedback = feedbackService.getFeedbackById(feedbackId);
        existingFeedback.setFeedbackName(feedbackRequestDTO.getFeedbackName());
        existingFeedback.setUserId(feedbackRequestDTO.getUserId());
        Feedback updatedFeedback = feedbackService.updateFeedback(existingFeedback);
        FeedbackResponse responseDTO = new FeedbackResponse();
        responseDTO.setFeedbackId(updatedFeedback.getFeedbackId());
        responseDTO.setFeedbackName(updatedFeedback.getFeedbackName());
        responseDTO.setUserId(updatedFeedback.getUserId());
        return ResponseEntity.ok(responseDTO);
    }

    @DeleteMapping("/del/{feedbackId}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable Long feedbackId) {
        feedbackService.deleteFeedback(feedbackId);
        return ResponseEntity.noContent().build();
    }
}