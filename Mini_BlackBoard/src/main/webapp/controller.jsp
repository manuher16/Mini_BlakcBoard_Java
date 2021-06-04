<%@ page import='java.util.*' %>
<%@ page import='javaClases.Alumno' %>
<%@ page import='javaClases.DriverMYSQL' %>
<%
DriverMYSQL driver = new DriverMYSQL();
String accountId = request.getParameter("accountID");
driver.seStatement(String.format("select * from %s",accountId));

%>