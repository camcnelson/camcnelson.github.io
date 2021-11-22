class Gallery extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {

        this.innerHTML = `
        <div class='card-columns' id='gallery_header' style='column-count:1;'></div>
        <div class='card-columns'>
        <div id='gallery'></div>
        </div>
        `;

        var src = this.getAttribute('src');
        var title = this.getAttribute('title');
        var text = this.getAttribute('text');

        $(document).ready(function() {

            $.ajax({
                url : src,
                success: function (data) {

                    if((title != null) || (text != null)) {
                        var title_card = `
                        <div class='card'>
                            <div class='card-body' style='text-align:justify'>`
                            + (title != null ? `<div class='card-title'>` + title + `</div>`:'')
                            + (text != null ? `<div class='card-text'>` + text + `</div>`:'')
                            + `</div>
                        `;
                        $("#gallery_header").append( title_card );
                    }

                    $(data).find("a").attr("href", function (i, val) {
                        if( val.match(/\.(jpe?g|png|gif)$/) ) {
                            var card = `
                            <div class='card clickable'>
                            <a data-fancybox='gallery' href='`+ val + `'>
                                <img class='card-img-top' src='`+ val + `'/>
                            </a>
                            </div>
                            `;
                            $("#gallery").append( card );
                        }
                    });
                }
            });
            
        });

    }
  }
  
  customElements.define('gallery-component', Gallery);
  