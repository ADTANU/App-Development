package com.astrasquad.tanushri.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.astrasquad.tanushri.dto.DepositRequest;
import com.astrasquad.tanushri.dto.DepositResponse;

import com.astrasquad.tanushri.model.Deposit;
import com.astrasquad.tanushri.repository.DepositRepository;
import com.astrasquad.tanushri.service.DepositService;

@RestController
@RequestMapping("/deposit")
public class DepositController {

	@Autowired
    private DepositService depositService;
    @Autowired
    private DepositRepository depositRepository;
    
    @PostMapping("/post")
    public ResponseEntity<DepositResponse> createDeposit(@RequestBody DepositRequest depositRequestDTO) {
		Deposit deposit = new Deposit();
		deposit.setHolderName(depositRequestDTO.getHolderName());
		deposit.setAnumber(depositRequestDTO.getAnumber());
		deposit.setAccName(depositRequestDTO.getAccName());
		deposit.setDdate(depositRequestDTO.getDdate());
		deposit.setDnotes(depositRequestDTO.getDnotes());
		deposit.setDphone(depositRequestDTO.getDphone());
		deposit.setDctype(depositRequestDTO.getDctype());
		deposit.setDamount(depositRequestDTO.getDamount());
        
        // Set other relevant fields

        // Call the service layer to create the event
		Deposit createDeposit = depositService.createDeposit(deposit);

        // Map the created event entity to the response DTO within the controller method
        DepositResponse responseDTO = new DepositResponse();
        responseDTO.setDid(createDeposit.getDid());
        responseDTO.setHolderName(createDeposit.getHolderName());
        responseDTO.setAnumber(createDeposit.getAnumber());
        responseDTO.setAccName(createDeposit.getAccName());
        responseDTO.setDdate(createDeposit.getDdate());
        responseDTO.setDnotes(createDeposit.getDnotes());
        responseDTO.setDphone(createDeposit.getDphone());
        responseDTO.setDctype(createDeposit.getDctype());
        responseDTO.setDamount(createDeposit.getDamount());
        

        return ResponseEntity.ok(responseDTO);
    }

}
