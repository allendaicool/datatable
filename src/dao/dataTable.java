package dao;



import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map.Entry;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 * Servlet implementation class dataTable
 */
//@WebServlet("/dataTable")
public class dataTable extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public dataTable() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		for (Entry<String, String[]> entry : request.getParameterMap().entrySet()) {
		    String name = entry.getKey();
		    System.out.println("parameter name is " + name);
		    String[] value = entry.getValue();
		    for ( String temp : value)
		    {
		    	System.out.println("temp is " + temp);
		    }
		}
		String starRating = request.getParameter("rating");
		System.out.println("pass in star rating is " + starRating);
		System.out.println("come here ---------------------------------------");
		PrintWriter out = response.getWriter();
		JSONObject obj = new JSONObject();
		obj.put("Star_Rating", "1");
		obj.put("Device", "ST26i");
		obj.put("Review_Submit_Date", "2014-11-01T00:00:20Z");
		obj.put("Review_Title", "#");
		obj.put("Review_Text", "Why I can't sign in or create an account?");
		obj.put("Label", "Login");
		JSONObject obj2 = new JSONObject();
		obj2.put("Star_Rating", "2");
		obj2.put("Device", "ST26i");
		obj2.put("Review_Submit_Date", "2014-11-01T00:00:20Z");
		obj2.put("Review_Title", "#");
		obj2.put("Review_Text", "I have bought tons of books through Amazon over the years and then");
		obj2.put("Label", "Download Issue");
		JSONArray list = new JSONArray();
		list.add(obj);
		list.add(obj2);
		JSONObject container = new JSONObject();
		container.put("data",list );
		response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");
	    out.write(container.toString());
	    System.out.println("get here !!!!!");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
