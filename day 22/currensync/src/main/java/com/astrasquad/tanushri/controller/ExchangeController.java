package com.astrasquad.tanushri.controller;

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

import com.astrasquad.tanushri.dto.ExchangeRequestDTO;
import com.astrasquad.tanushri.dto.ExchangeResponseDTO;
import com.astrasquad.tanushri.model.Exchange;
import com.astrasquad.tanushri.repository.UserRepository;
import com.astrasquad.tanushri.service.ExchangeService;

@RestController
@RequestMapping("/exchange")
public class ExchangeController {
	
	@Autowired
	private ExchangeService exchangeService;
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/post")
	public ResponseEntity<ExchangeResponseDTO> createExchange(@RequestBody ExchangeRequestDTO exchangeRequestDTO) {
		Exchange exchange = new Exchange();
		exchange.setCurrency(exchangeRequestDTO.getCurrency());
		exchange.setValue1(exchangeRequestDTO.getValue1());
		exchange.setChange1(exchangeRequestDTO.getChange1());
		
		Exchange createdExchange = exchangeService.createExchange(exchange);
		
		ExchangeResponseDTO responseDTO = new ExchangeResponseDTO();
        responseDTO.setExchangeID(createdExchange.getExchangeID());
        responseDTO.setCurrency(createdExchange.getCurrency());
        responseDTO.setValue1(createdExchange.getValue1());
        responseDTO.setChange1(createdExchange.getChange1());
        
        return ResponseEntity.ok(responseDTO);
	}
	@GetMapping("/get")
	public ResponseEntity<List<ExchangeResponseDTO>> getExchange(@PathVariable Integer exchangeID) {
	
		List<Exchange> exchanges = exchangeService.getAllExchanges();

        // Map the list of event entities to a list of response DTOs within the controller method
        List<ExchangeResponseDTO> responseDTOs = exchanges.stream()
                .map(exchange -> {
                	ExchangeResponseDTO responseDTO = new ExchangeResponseDTO();
                    responseDTO.setExchangeID(exchange.getExchangeID());
                    responseDTO.setCurrency(exchange.getCurrency());
                    responseDTO.setValue1(exchange.getValue1());
                    responseDTO.setChange1(exchange.getChange1());
              
                    // Set other relevant fields
                    return responseDTO;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(responseDTOs);
	}
	
	@PutMapping("/put/{eventID}")
    public ResponseEntity<ExchangeResponseDTO> updateExchange(@PathVariable Integer eventID, @RequestBody ExchangeRequestDTO exchangeRequestDTO) {
        // Call the service layer to update the event by ID
        Exchange existingExchange = exchangeService.getExchangeById(eventID);

        // Update the existing event entity with the data from the DTO
        existingExchange.setCurrency(exchangeRequestDTO.getCurrency());
        existingExchange.setValue1(exchangeRequestDTO.getValue1());
        existingExchange.setChange1(exchangeRequestDTO.getChange1());
        
        // Update other relevant fields

        // Call the service layer to save the updated event
        Exchange updatedExchange = exchangeService.updateExchange(existingExchange);

        // Map the updated event entity to the response DTO within the controller method
        ExchangeResponseDTO responseDTO = new ExchangeResponseDTO();
        responseDTO.setExchangeID(updatedExchange.getExchangeID());
        responseDTO.setCurrency(updatedExchange.getCurrency());
        responseDTO.setValue1(updatedExchange.getValue1());
        responseDTO.setChange1(updatedExchange.getChange1());
        // Set other relevant fields

        return ResponseEntity.ok(responseDTO);
    }
	
	@DeleteMapping("/del/{eventID}")
    public ResponseEntity<Void> deleteExchange(@PathVariable Integer eventID) {
        // Call the service layer to delete the event by ID
        exchangeService.deleteExchange(eventID);

        return ResponseEntity.noContent().build();
    }
}
