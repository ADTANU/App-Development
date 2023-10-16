package com.astrasquad.tanushri.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.astrasquad.tanushri.model.Exchange;
import com.astrasquad.tanushri.repository.ExchangeRepository;

@Service
public class ExchangeService {
	@Autowired
    private ExchangeRepository exchangeRepository;

    public Exchange createExchange(Exchange exchange) {
        // Implement logic to create and save an event
        return exchangeRepository.save(exchange);
    }

    public Exchange getExchangeById(Integer eventId) {
        // Implement logic to retrieve an event by ID
        Optional<Exchange> eventOptional = exchangeRepository.findById(eventId);
        return eventOptional.orElse(null);
    }

    public List<Exchange> getAllExchanges() {
        // Implement logic to retrieve all events
        return exchangeRepository.findAll();
    }

    public Exchange updateExchange(Exchange exchange) {
        // Implement logic to update and save an event
        return exchangeRepository.save(exchange);
    }

    public void deleteExchange(Integer eventId) {
        // Implement logic to delete an event by ID
        exchangeRepository.deleteById(eventId);
    }
}
