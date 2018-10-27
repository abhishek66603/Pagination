package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.entity.Country;
import com.example.demo.respository.CountryRespository;
import com.example.demo.service.CountryRepositoryImpl;

@SpringBootApplication
public class AjaxDemo1Application implements CommandLineRunner{

	@Autowired
	CountryRepositoryImpl countryrepo;
	
	public static void main(String[] args) {
		SpringApplication.run(AjaxDemo1Application.class, args);
	}
	
	
	@Override
	public void run(String... args) throws Exception {
		countryrepo.saveCountry(new Country("India","Delhi"));
		countryrepo.saveCountry(new Country("Earth","World"));
		countryrepo.saveCountry(new Country("Germany","Berlin"));
		countryrepo.saveCountry(new Country("Russia","Moscow"));
		countryrepo.saveCountry(new Country("USA","Washington DC"));
		countryrepo.saveCountry(new Country("World Government","Holyland MarieJoes"));
	}
}
