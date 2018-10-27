package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Country;
import com.example.demo.respository.CountryRespository;

@Service
public class CountryRepositoryImpl {
	
	@Autowired
	CountryRespository countryDao;
	
	public void saveCountry(Country country) {
		countryDao.save(country);
	}
	
	public void deleteCountry(Integer id) {
		countryDao.delete(id);
	}
	
	public List<Country> getCountryList(){
		return (List<Country>) countryDao.findAll();
	}
	
	public Page getCountryListPage(int page, int size){
		return (Page) countryDao.findAll(new PageRequest(page, size));
	}
	
	public Country getCountryById(Integer id) {
		return countryDao.findOne(id);
	}

}
