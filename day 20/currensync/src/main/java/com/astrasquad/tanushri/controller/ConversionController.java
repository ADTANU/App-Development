package com.astrasquad.tanushri.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.astrasquad.tanushri.dto.ConversionRequest;
import com.astrasquad.tanushri.dto.ConversionResponse;
import com.astrasquad.tanushri.service.ConversionService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/tanu/conversion")
@RequiredArgsConstructor
public class ConversionController {

    private final ConversionService conversionService;

  

    @PostMapping("/convert/post")
    public ConversionResponse createConversion(@RequestBody ConversionRequest conversionRequest) {
        return conversionService.createConversion(conversionRequest);
    }

    @GetMapping("/convert/{cid}")
    public ConversionResponse getConversionById(@PathVariable Long cid) {
        return conversionService.getConversionById(cid);
    }

    @GetMapping("/convert/get")
    public List<ConversionResponse> getAllConversions() {
        return conversionService.getAllConversions();
    }

    @PutMapping("/convert/get/{cid}")
    public ConversionResponse updateConversion(@PathVariable Long cid, @RequestBody ConversionRequest conversionRequest) {
        return conversionService.updateConversion(cid, conversionRequest);
    }

    @DeleteMapping("/convert/del/{cid}")
    public void deleteConversion(@PathVariable Long cid) {
        conversionService.deleteConversion(cid);
    }
}
