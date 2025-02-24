import{_ as t,e as p,f as a,g as s,h as o,i as l,r as i,o as r}from"./app-qrxt60JZ.js";const c={},u={id:"extra-parameters",tabindex:"-1"},d={class:"header-anchor",href:"#extra-parameters"};function m(v,n){const e=i("Badge");return r(),p("div",null,[n[1]||(n[1]=a(`<h1 id="india" tabindex="-1"><a class="header-anchor" href="#india"><span>India</span></a></h1><h2 id="receive-money" tabindex="-1"><a class="header-anchor" href="#receive-money"><span>Receive money</span></a></h2><h3 id="channels-for-receive-money" tabindex="-1"><a class="header-anchor" href="#channels-for-receive-money"><span>Channels for receive money</span></a></h3><table><thead><tr><th>ID</th><th>Description</th></tr></thead><tbody><tr><td>1000</td><td>UPI</td></tr></tbody></table><h3 id="request-example-for-receive-money" tabindex="-1"><a class="header-anchor" href="#request-example-for-receive-money"><span>Request example for receive money</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token punctuation">\\</span></span>
<span class="line">  https://example.com/api/v1/trades <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-d</span> <span class="token string">&#39;{</span>
<span class="line">    &quot;client_key&quot;: &quot;01h6tn69wfcpy5q5x3vpb3x9me&quot;,</span>
<span class="line">    &quot;amount&quot;: &quot;100.00&quot;,</span>
<span class="line highlighted">    &quot;channel_id&quot;: &quot;1000&quot;,</span>
<span class="line">    &quot;out_trade_no&quot;: &quot;20230101000000&quot;,</span>
<span class="line">    &quot;notify_url&quot;: &quot;https://your-domain.com/webhook&quot;,</span>
<span class="line">    &quot;signature&quot;: &quot;ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082&quot;</span>
<span class="line">  }&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01h6tn69wfcpy5q5x3vpb3x9me&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;out_trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20230101000000&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;payment_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/cashier&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:01:01.000000Z&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-a-transaction-for-receive-money" tabindex="-1"><a class="header-anchor" href="#get-a-transaction-for-receive-money"><span>Get a transaction for receive money</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token punctuation">\\</span></span>
<span class="line">  https://example.com/api/v1/trades/20230101000000?client_key<span class="token operator">=</span>01h6tn69wfcpy5q5x3vpb3x9me<span class="token operator">&amp;</span><span class="token assign-left variable">signature</span><span class="token operator">=</span>ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01h6tn69wfcpy5q5x3vpb3x9me&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;out_trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1698896652712&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:01:01.000000Z&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;paid_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:02:03.000000Z&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="send-money" tabindex="-1"><a class="header-anchor" href="#send-money"><span>Send money</span></a></h2><h3 id="channels-for-send-money" tabindex="-1"><a class="header-anchor" href="#channels-for-send-money"><span>Channels for send money</span></a></h3><table><thead><tr><th>ID</th><th>Description</th></tr></thead><tbody><tr><td>5000</td><td>UPI</td></tr></tbody></table>`,13)),s("h3",u,[s("a",d,[s("span",null,[n[0]||(n[0]=o("Extra parameters ")),l(e,{type:"warning",text:"extra",vertical:"top"})])])]),n[2]||(n[2]=a(`<p><code>extra</code></p><table><thead><tr><th>Key</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>ifsc</td><td>Yes</td><td>IFSC</td></tr><tr><td>bank_code</td><td>Yes</td><td>Bank code. Please fill the value as <code>ICIC</code>.</td></tr></tbody></table><h3 id="request-example-for-send-money" tabindex="-1"><a class="header-anchor" href="#request-example-for-send-money"><span>Request example for send money</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token punctuation">\\</span></span>
<span class="line">  https://example.com/api/v1/transfers <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-d</span> <span class="token string">&#39;{</span>
<span class="line">    &quot;client_key&quot;: &quot;01hcd0d0c2qh9wy5efm5sxrk38&quot;,</span>
<span class="line">    &quot;amount&quot;: &quot;100.00&quot;,</span>
<span class="line highlighted">    &quot;channel_id&quot;: &quot;5000&quot;,</span>
<span class="line">    &quot;out_transfer_no&quot;: &quot;20230101000000&quot;,</span>
<span class="line">    &quot;notify_url&quot;: &quot;https://your-domain.com/webhook&quot;,</span>
<span class="line">    &quot;payee_account&quot;: &quot;1234567890&quot;,</span>
<span class="line">    &quot;payee_name&quot;: &quot;Sammy Shark&quot;,</span>
<span class="line highlighted">    &quot;extra&quot;: &quot;{\\&quot;ifsc\\&quot;:\\&quot;IFSC0123456\\&quot;, \\&quot;bank_code\\&quot;:\\&quot;ICIC\\&quot;}&quot;,</span>
<span class="line">    &quot;signature&quot;: &quot;ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082&quot;</span>
<span class="line">  }&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01hcd0d0c2qh9wy5efm5sxrk38&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;transfer_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;out_transfer_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20230101000000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;payee_account&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;payee_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sammy Shark&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:01:01.000000Z&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-a-transaction-for-send-money" tabindex="-1"><a class="header-anchor" href="#get-a-transaction-for-send-money"><span>Get a transaction for send money</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token punctuation">\\</span></span>
<span class="line">  https://example.com/api/v1/transfers/20230101000000?client_key<span class="token operator">=</span>01h6tn69wfcpy5q5x3vpb3x9me<span class="token operator">&amp;</span><span class="token assign-left variable">signature</span><span class="token operator">=</span>ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01hcd0d0c2qh9wy5efm5sxrk38&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;transfer_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;out_transfer_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20230101000000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;payee_account&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;payee_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sammy Shark&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:01:01.000000Z&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;paid_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:02:03.000000Z&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8))])}const k=t(c,[["render",m],["__file","india.html.vue"]]),h=JSON.parse('{"path":"/reference/india.html","title":"India","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Receive money","slug":"receive-money","link":"#receive-money","children":[{"level":3,"title":"Channels for receive money","slug":"channels-for-receive-money","link":"#channels-for-receive-money","children":[]},{"level":3,"title":"Request example for receive money","slug":"request-example-for-receive-money","link":"#request-example-for-receive-money","children":[]},{"level":3,"title":"Get a transaction for receive money","slug":"get-a-transaction-for-receive-money","link":"#get-a-transaction-for-receive-money","children":[]}]},{"level":2,"title":"Send money","slug":"send-money","link":"#send-money","children":[{"level":3,"title":"Channels for send money","slug":"channels-for-send-money","link":"#channels-for-send-money","children":[]},{"level":3,"title":"Extra parameters","slug":"extra-parameters","link":"#extra-parameters","children":[]},{"level":3,"title":"Request example for send money","slug":"request-example-for-send-money","link":"#request-example-for-send-money","children":[]},{"level":3,"title":"Get a transaction for send money","slug":"get-a-transaction-for-send-money","link":"#get-a-transaction-for-send-money","children":[]}]}],"git":{},"filePathRelative":"reference/india.md"}');export{k as comp,h as data};
