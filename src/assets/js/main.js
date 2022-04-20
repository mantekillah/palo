// toggle toc -> header.html -> .span_right .popup_btn
function toggle_toc() {
    document.getElementById("popup_toc").classList.toggle("show");
}

// open collection list -> header.html -> .collection_list
function open_collection_list() {
    document.getElementById("the_collection_list").classList.add("show");
    show_collection("all");
}
// close collection list -> collections.html -> .collection_list
function close_collection_list() {
    document.getElementById("the_collection_list").classList.remove("show");
    var collection_labels = document.getElementsByClassName("post_list_in_1_collection");
    for (idx = 0; idx < collection_labels.length; idx++) {
        collection_labels[idx].classList.remove("show");
    }
}

// toggle  -> collections.html -> .post_list
function show_collection(col_name) {
    var collection_labels = document.getElementsByClassName("post_list_in_1_collection");
    for (idx = 0; idx < collection_labels.length; idx++) {
        collection_labels[idx].classList.remove("show");
    }
    document.getElementById(col_name).classList.add("show");
    document.getElementById("clh_title").innerHTML = col_name;
}

//scroll page -> header.html -> .span_right prev & next btn
function scroll_percentage(mtpler) {
    document
        .getElementById("div_atcl")
        .scrollBy(0, window.innerHeight * mtpler);
}

// toggle entire page -> header.html -> #mxmz_btn
function toggle_maximize() {
    if (ctner_state == 0) {
        ctner.style.top = "0";    
        ctner.style.width = "100%";
        ctner.style.height = "100%";
        ctner.style.maxWidth = "100%";
        if (document.getElementById("mxmz_text")) {
            document.getElementById("mxmz_text").innerHTML = "Restaura";
        }
        ctner_state = 1;
    } else if (ctner_state == 1) {
        ctner.style.top = "2%";    
        ctner.style.width = "84%";
        ctner.style.height = "97%";
        ctner.style.maxWidth = "1350px";
        if (document.getElementById("mxmz_text")) {
            document.getElementById("mxmz_text").innerHTML = "Maximitza";
        }
        ctner_state = 0;
    }
}