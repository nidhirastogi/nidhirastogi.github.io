window.template = Handlebars.compile(`
<div class="articles">
    <ul>
        {{#each .}}
            <li><span class="type">{{Type}}</span> - {{{Content}}} </li>
        {{/each}}
    </ul>
  </div>`);