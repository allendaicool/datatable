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

	private JSONObject container = null;

	private JSONArray objectList = null;

	private static final String EDIT_ACTION = "edit";


	private static final String ACTION = "action";
	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public dataTable() {
		super();
		objectList = new JSONArray();
		container = new JSONObject();
		int row_id = 0 ;

		JSONObject obj = new JSONObject();

		obj.put("DT_RowId", String.valueOf(row_id++));
		obj.put("Star_Rating", 1);
		obj.put("Device", "ST26i");
		obj.put("Review_Submit_Date", "2014-11-01T00:00:20Z");
		obj.put("Review_Title", "#");
		obj.put("Review_Text", "Why I can't sign in or create an account?");
		obj.put("Label", "Login");
		//obj.put("App_Version_Code", "1141375177");
		JSONObject obj2 = new JSONObject();
		obj2.put("DT_RowId", String.valueOf(row_id++));
		obj2.put("Star_Rating", "2");
		obj2.put("Device", "ST26i");
		obj2.put("Review_Submit_Date", "2014-11-01T00:00:20Z");
		obj2.put("Review_Title", "#");
		obj2.put("Review_Text", "I have bought tons of books through Amazon over the years and then");
		obj2.put("Label", "Download Issue");
		//obj2.put("App_Version_Code", "11413751899");


		JSONObject obj3 = new JSONObject();
		obj3.put("DT_RowId", String.valueOf(row_id++));
		obj3.put("Star_Rating", "1");
		obj3.put("Device", "N81");
		obj3.put("Review_Submit_Date", "2014-05-02T00:00:20Z");
		obj3.put("Review_Title", "creating account");
		obj3.put("Review_Text", "Why I can't sign in or create an account?");
		obj3.put("Label", "sync");
		//obj3.put("App_Version_Code", "1141375177");


		JSONObject obj4 = new JSONObject();
		obj4.put("DT_RowId", String.valueOf(row_id++));
		obj4.put("Star_Rating", "3");
		obj4.put("Device", "GX685");
		obj4.put("Review_Submit_Date", "2015-07-09T00:00:20Z");
		obj4.put("Review_Title", "other iseeu");
		obj4.put("Review_Text", "why not go to hell?");
		obj4.put("Label", "store");
		//obj4.put("App_Version_Code", "1141375177");


		JSONObject obj5 = new JSONObject();
		obj5.put("DT_RowId", String.valueOf(row_id++));
		obj5.put("Star_Rating", "4");
		obj5.put("Device", "gs111");
		obj5.put("Review_Submit_Date", "2013-12-03T00:00:20Z");
		obj5.put("Review_Title", "#");
		obj5.put("Review_Text", "still having problem to download");
		obj5.put("Label", "Login");
		//obj5.put("App_Version_Code", "1141375177");



		objectList.add(obj);
		objectList.add(obj2);
		objectList.add(obj3);
		objectList.add(obj4);
		objectList.add(obj5);
		//container.put("wordCloud", "helloValue");
		container.put("data", objectList);
		// TODO Auto-generated constructor stub
	}



	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("should be here twice");

		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		System.out.println("action is " + request.getParameter(ACTION));

		if ( request.getParameter(ACTION) != null && request.getParameter(ACTION).equalsIgnoreCase(EDIT_ACTION))
		{
			handleLabelEdit(request,out);
			
		}
		else if (request.getParameter("rating") != null)
		{
			handleQuery(request);
			out.write(container.toString());

		}
		else
		{
			out.write(container.toJSONString());
		}
		out.close();
	}

	private void handleQuery(HttpServletRequest request)
	{
		int rating  = Integer.valueOf(request.getParameter("rating"));
		String dateFrom = request.getParameter("dateFrom");
		String dateTo = request.getParameter("dateTo");
		String non_empty = request.getParameter("NonEmpty");
		System.out.println("dateFrom is " + dateFrom );
		JSONArray temp_array = (JSONArray)container.get("data");
		JSONObject temp_obj = (JSONObject)temp_array.get(0);
		temp_obj.put("Label", "yihongdai");
		temp_array.remove(4);
		
	}

	private void handleLabelEdit(HttpServletRequest request, PrintWriter out)
	{
		for (Entry<String, String[]> entry : request.getParameterMap().entrySet()) {
			String name = entry.getKey();
			System.out.println("parameter name is " + name);
			String[] value = entry.getValue();
			for ( String temp : value)
			{
				System.out.println("parameter value  is " + temp);
			}
		}
		int obj_id = Integer.valueOf(request.getParameter("id"));
		System.out.println("obj id is " + obj_id);
		JSONArray temp_array = (JSONArray)container.get("data");
		JSONObject temp_obj = (JSONObject) temp_array.get(obj_id);
		System.out.println("the new label is " + request.getParameter("data[Label]"));
		temp_obj.put("Label", request.getParameter("data[Label]"));
		System.out.println("new temo_obj label is " + temp_obj.get("Label"));
		String temp = (String)(temp_obj.get("Label"));
		System.out.println("printwriter temp is "  + temp);
		out.write(container.toString());
	}

	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
