function submit() {
    var name = document.getElementById('name').value
    var password = document.getElementById('password').value
    var id = document.getElementById('id').value

    var hash = sha256(password)

    http_get_async(`http://127.0.0.1:5000/make_account?name=${name}&hash=${hash}&id=${id}`)

    document.location.href="/login"
}