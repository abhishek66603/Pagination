package com.example.demo.respository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.Country;

public interface CountryRespository extends CrudRepository<Country, Integer>{

	Page<Country> findAll(Pageable page);
	
}
