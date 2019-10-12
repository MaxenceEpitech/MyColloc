const API_ENDPOINT = 'http://192.168.0.101:9081';

const handlePromise = (promise) => {
	return promise.then(data => {
		return [null, data];
	})
		.catch(err => [err]);
};

export const login = async (user) => {
    let [err, response] = await handlePromise(fetch(`${API_ENDPOINT}/user/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
    }))
    const json = await response.json();
    return json;
}
