(function() {
    var form = document.getElementById("update");

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();

        if (this.elements["id"].value === "") {
            window.alert("chose beer to edit");
        } else {
            this.submit();
        }
    });
})();
