window.template = Handlebars.compile(`
<div class="articles">
    <ul>
        {{#each .}}
            <li><span class="date">{{Date}} {{{type}}}  </span> {{{Content}}} <br/> 
            {{#each link}}
            <a href="{{{link}}}"><button type="button" class="btn btn-outline-primary">{{{name}}}</button></a>
            {{/each}}
            </li>
        {{/each}}
    </ul>
  </div>`);