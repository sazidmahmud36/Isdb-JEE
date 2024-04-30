package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class EmployeeController {
	
	@PostMapping("/insert")
	public Employee doSave(@RequestBody Employee s) {
		
		EmployeeDA da = new EmployeeDA();
		Employee data=  da.save(s);

		return data;
	}
	
	
	
	@GetMapping("/{id}/{password}")
	public Employee m3(@PathVariable int id,@PathVariable String password) {
		EmployeeDA da= new EmployeeDA();
		Employee data = da.login(id,password);
		return data;
	}
	
	List<Employee> emp=new ArrayList<>();
	@GetMapping("/allemployee")
	public List<Employee> m2() {
		EmployeeDA da = new EmployeeDA();
		emp = da.allEmployee();

		return emp;
	}

}
