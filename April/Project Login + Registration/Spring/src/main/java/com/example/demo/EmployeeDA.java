package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EmployeeDA {

	public Employee save(Employee s) {

		try {
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost/good", "root", "sazid364436");
			PreparedStatement ps = con.prepareStatement("INSERT INTO employee VALUES(?,?,?,?)");
			
			ps.setInt(1, s.getEmp_id());
			ps.setString(2, s.getEmp_name());
			ps.setString(3, s.getEmp_email());
			ps.setString(4, s.getEmp_password());
			
			ps.executeUpdate();

		} catch (Exception e) {
			// TODO: handle exception
		}

		return s;
	}
//	------------------------------ log in -------------------------------------
	
	public Employee login(int id, String password) {
		Employee e =null;
		try {
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost/good", "root", "sazid364436");
			PreparedStatement pst1 = con.prepareStatement("select * from employee where emp_id=? AND emp_password=?");
			pst1.setInt(1, id);
			pst1.setString(2, password);
			ResultSet rs = pst1.executeQuery();
			while (rs.next()) {
				e=new Employee(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4));
			}

		} catch (Exception ex) {
			// TODO: handle exception
		}

		return e;
	}
	
//	------------------------------ Show -------------------------------------
	public List<Employee> allEmployee(){
		List<Employee> eList = new ArrayList<>();
		try {
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost/good", "root", "sazid364436");
			PreparedStatement pst = con.prepareStatement("select * from employee");
			ResultSet rs = pst.executeQuery();
			while(rs.next()) {
				eList.add(new Employee(rs.getInt(1),rs.getString(2),rs.getNString(3),rs.getNString(4)));
			}
			
			
		}catch(Exception e) {
			
		}
		return eList;
		
	}
	
}
