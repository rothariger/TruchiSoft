package com.quamove.trenes;

import java.io.IOException;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONException;

public class TrenesHorarios extends CordovaPlugin {
	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {
		if (action.equals("ObtenerTiempos")) {
			ObtenerHorarios(callbackContext, args.getInt(0));
			return true;
		}
		return false;
	}

	private void ObtenerHorarios(final CallbackContext callbackContext,
			final Integer ramalId) {
		new Thread(new Runnable() {
			@Override
			public void run() {
				HttpGet request = new HttpGet(
						"http://trenes.mininterior.gov.ar/v2_pg/public/iframe_web/ajax_arribos.php?key=v%23v%23QTUtWp%23MpWRy80Q0knTE10I30kj%23FNyZ&ramal="
								+ ramalId.toString());
				request.addHeader(
						"Referer",
						"http://trenes.mininterior.gov.ar/v2_pg/public/iframe_web/mininterior_v1/iframe.php");
				try {
					HttpResponse response = new DefaultHttpClient()
							.execute(request);
					HttpEntity entity = response.getEntity();
					callbackContext.success(EntityUtils.toString(
							response.getEntity(), HTTP.UTF_8));
				} catch (IOException e) {
					callbackContext.error(e.getMessage());
				}
			}
		}).start();
	}
}
