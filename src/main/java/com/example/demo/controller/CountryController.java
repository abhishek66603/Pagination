package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.entity.Country;
import com.example.demo.service.CountryRepositoryImpl;

@Controller
public class CountryController {
	
	@Autowired
	private CountryRepositoryImpl countryRepo;


	@GetMapping("/")
	public String homePage(Model model, @RequestParam(defaultValue="0") int page) {
	
		Page pages =countryRepo.getCountryListPage(page, 4);
		System.out.println("Pages : "+pages.getContent());

		//model.addAttribute("data",countryRepo.getCountryListPage(page, 4));
		model.addAttribute("data",pages.getContent());
		model.addAttribute("pages", pages.getTotalPages());
		model.addAttribute("currentPage", page );
		return "index";
	}
	
	@RequestMapping("/save")
	public String saveCountry(Country country) {
		countryRepo.saveCountry(country);
		return "redirect:/";
	}
	
	@RequestMapping("/delete")
	public String deleteCountry(Integer id) {
		countryRepo.deleteCountry(id);
		return "redirect:/";
	}
	
	@ResponseBody
	@RequestMapping("/findOne")
	public Country findOneCountry(Integer id) {
	
		return countryRepo.getCountryById(id);
	}
}
