package com.astrasquad.feedback.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.astrasquad.feedback.model.Feedback;
import com.astrasquad.feedback.repository.FeedbackRepository;

@Service
public class FeedbackService {
	@Autowired
    private FeedbackRepository feedbackRepository;
    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }
    public Feedback getFeedbackById(Long feedbackId) {
        Optional<Feedback> feedbackOptional = feedbackRepository.findById(feedbackId);
        return feedbackOptional.orElse(null);
    }
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }
    public Feedback updateFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }
    public void deleteFeedback(Long feedbackId) {
        feedbackRepository.deleteById(feedbackId);
    }

}
