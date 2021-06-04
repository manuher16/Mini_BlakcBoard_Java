package javaClases;


import java.sql.*; 
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;


public class DriverMYSQL {
	public DriverMYSQL() {}
	Statement stmt;  
	Connection conn;
	public  void conect() {
		 this.conn= null;
		 try {
	            // The newInstance() call is a work around for some
	            // broken Java implementations

	            Class.forName("com.mysql.jdbc.Driver").newInstance();
	        } catch (Exception ex) {
	            // handle the error
	        }
		try {
		    this.conn =
		       DriverManager.getConnection("jdbc:mysql://localhost:3306/test?" +
		                                   "user=root&password=admin");

		    // Do something with the Connection

		 
		} catch (SQLException ex) {
		    // handle any errors
		    System.out.println("SQLException: " + ex.getMessage());
		    System.out.println("SQLState: " + ex.getSQLState());
		    System.out.println("VendorError: " + ex.getErrorCode());
		}
		}
	public void seStatement(String query) {
	 try {
		this.stmt= this.conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);
		ResultSet rs=this.stmt.executeQuery(query);  
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
		
	}
	}
    

       
