import{_ as r,e as d,g as n,f as l,i as t,h as s,j as o,r as c,o as k}from"./app-qrxt60JZ.js";const m={},v={id:"http头参数",tabindex:"-1"},b={class:"header-anchor",href:"#http头参数"},h={id:"包体参数",tabindex:"-1"},q={class:"header-anchor",href:"#包体参数"};function g(y,a){const e=c("Badge"),p=c("CodeTabs");return k(),d("div",null,[a[4]||(a[4]=n("h1",{id:"代付下单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代付下单"},[n("span",null,"代付下单")])],-1)),a[5]||(a[5]=n("p",null,[s("POST "),n("code",null,"/api/v1/transfers")],-1)),n("h3",v,[n("a",b,[n("span",null,[a[0]||(a[0]=s("HTTP头参数 ")),t(e,{type:"tip",text:"Header",vertical:"top"})])])]),a[6]||(a[6]=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"说明")])]),n("tbody",null,[n("tr",null,[n("td",null,"Accept"),n("td",null,[n("code",null,"application/json")])])])],-1)),n("h3",h,[n("a",q,[n("span",null,[a[1]||(a[1]=s("包体参数 ")),t(e,{type:"tip",text:"Body",vertical:"top"})])])]),a[7]||(a[7]=l(`<table><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>参与签名</th><th>说明</th></tr></thead><tbody><tr><td>client_key</td><td>string</td><td>是</td><td>是</td><td>商户标识。由大洋支付颁发。</td></tr><tr><td>amount</td><td>string</td><td>是</td><td>是</td><td>代付金额。单位：<code>元</code>。</td></tr><tr><td>channel_id</td><td>string</td><td>是</td><td>是</td><td>代付通道ID。</td></tr><tr><td>out_transfer_no</td><td>string</td><td>是</td><td>是</td><td>商户代付订单号。<br><span style="color:red;">最大长度 64，必须是唯一的</span>。</td></tr><tr><td>notify_url</td><td>string</td><td>是</td><td>是</td><td>商户接收通知的网址。</td></tr><tr><td>payee_account</td><td>string</td><td>是</td><td>是</td><td>收款人账号。</td></tr><tr><td>payee_name</td><td>string</td><td>是</td><td>是</td><td>收款人姓名。</td></tr><tr><td>extra</td><td>string</td><td>特殊的</td><td>是</td><td>业务参数。<br>必填时必须是 <code>JSON</code> 字符串。</td></tr><tr><td>signature</td><td>string</td><td>是</td><td>否</td><td>签名值。</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">NOTE</p><p><code>extra</code> 参数说明：您可以理解为 <code>required_if</code>，也就是说特定的场景为必填，且需提交的参数可能不一样，请参考不同国家代付下单接口的业务参数。例：越南银行代付，<code>extra.bank_code</code> 必填。</p></div><h3 id="请求示例" tabindex="-1"><a class="header-anchor" href="#请求示例"><span>请求示例</span></a></h3><p><strong>注意：以下示例仅适用于巴西的业务。</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token punctuation">\\</span></span>
<span class="line">  https://example.com/api/v1/transfers <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-d</span> <span class="token string">&#39;{</span>
<span class="line">    &quot;client_key&quot;: &quot;01hcd0d0c2qh9wy5efm5sxrk38&quot;,</span>
<span class="line">    &quot;amount&quot;: &quot;100.00&quot;,</span>
<span class="line highlighted">    &quot;channel_id&quot;: &quot;5003&quot;,</span>
<span class="line">    &quot;out_transfer_no&quot;: &quot;20230101000000&quot;,</span>
<span class="line">    &quot;notify_url&quot;: &quot;https://your-domain.com/webhook&quot;,</span>
<span class="line">    &quot;payee_account&quot;: &quot;1234567890&quot;,</span>
<span class="line">    &quot;payee_name&quot;: &quot;Sammy Shark&quot;,</span>
<span class="line highlighted">    &quot;extra&quot;: &quot;{\\&quot;account_type\\&quot;:\\&quot;CPF\\&quot;, \\&quot;id_number\\&quot;:\\&quot;1234567890\\&quot;}&quot;,</span>
<span class="line">    &quot;signature&quot;: &quot;&quot;</span>
<span class="line">  }&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应参数" tabindex="-1"><a class="header-anchor" href="#响应参数"><span>响应参数</span></a></h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>client_key</td><td>string</td><td>商户标识。由大洋支付颁发。</td></tr><tr><td>amount</td><td>string</td><td>代付金额。单位：<code>元</code>。</td></tr><tr><td>transfer_no</td><td>string</td><td>代付订单号。</td></tr><tr><td>out_transfer_no</td><td>string</td><td>商户代付订单号。</td></tr><tr><td>channel_id</td><td>string</td><td>代付通道ID。</td></tr><tr><td>payee_account</td><td>string</td><td>收款人账号。</td></tr><tr><td>payee_name</td><td>string</td><td>收款人姓名。</td></tr><tr><td>created_at</td><td>string</td><td>下单时间。UTC 时间。</td></tr></tbody></table><h3 id="响应示例" tabindex="-1"><a class="header-anchor" href="#响应示例"><span>响应示例</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01hcd0d0c2qh9wy5efm5sxrk38&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;transfer_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;out_transfer_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20230101000000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5001&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;payee_account&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;payee_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sammy Shark&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:01:01.000000Z&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何判断是否下单成功" tabindex="-1"><a class="header-anchor" href="#如何判断是否下单成功"><span>如何判断是否下单成功？</span></a></h3><p>判断响应的HTTP 状态码是否是 <code>200</code> 或 <code>201</code>。或判断响应中是否存在某个字段，如：<code>transfer_no</code>。</p>`,11)),t(p,{id:"340",data:[{id:"Java"}]},{title0:o(({value:i,isActive:u})=>a[2]||(a[2]=[s("Java")])),tab0:o(({value:i,isActive:u})=>a[3]||(a[3]=[n("div",{class:"language-java line-numbers-mode","data-highlighter":"prismjs","data-ext":"java","data-title":"java"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("google"),n("span",{class:"token punctuation"},"."),s("gson"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token operator"},"*")]),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("io"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"IOException")]),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("net"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"URI")]),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("net"),n("span",{class:"token punctuation"},"."),s("http"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"HttpClient")]),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("net"),n("span",{class:"token punctuation"},"."),s("http"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"HttpRequest")]),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("net"),n("span",{class:"token punctuation"},"."),s("http"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"HttpResponse")]),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"HttpClientExample"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token class-name"},"HttpClient"),s(" client "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"HttpClient"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"newHttpClient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token comment"},"// Create the request body (example, if needed, otherwise, you can remove this)")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token class-name"},"String"),s(" requestBody "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"{\\"key\\":\\"value\\"}"'),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// You can replace with actual data for POST request")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token class-name"},"HttpRequest"),s(" request "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"HttpRequest"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"newBuilder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"uri"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"URI"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://example.com/api/v1/trades"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"POST"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[s("HttpRequest"),n("span",{class:"token punctuation"},"."),s("BodyPublishers")]),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ofString"),n("span",{class:"token punctuation"},"("),s("requestBody"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Accept"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"application/json"'),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Content-Type"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"application/json"'),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token class-name"},"HttpResponse"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},">")]),s(" response "),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),s("request"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},[s("HttpResponse"),n("span",{class:"token punctuation"},"."),s("BodyHandlers")]),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ofString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token comment"},"// Check if the HTTP status code is 200 ~ 299")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token keyword"},"int"),s(" statusCode "),n("span",{class:"token operator"},"="),s(" response"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"statusCode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("statusCode "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"200"),s(),n("span",{class:"token operator"},"&&"),s(" statusCode "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token number"},"299"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success: "'),s(),n("span",{class:"token operator"},"+"),s(" statusCode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Failed: "'),s(),n("span",{class:"token operator"},"+"),s(" statusCode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token comment"},"// Check if a specific key exists in the JSON response, e.g., 'transfer_no'")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token class-name"},"String"),s(" responseBody "),n("span",{class:"token operator"},"="),s(" response"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"body"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Response Body: "'),s(),n("span",{class:"token operator"},"+"),s(" responseBody"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"isValidJson"),n("span",{class:"token punctuation"},"("),s("responseBody"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token class-name"},"Gson"),s(" gson "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Gson"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token class-name"},"JsonObject"),s(" jsonObject "),n("span",{class:"token operator"},"="),s(" gson"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fromJson"),n("span",{class:"token punctuation"},"("),s("responseBody"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"JsonObject"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token class-name"},"String"),s(" key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"transfer_no"'),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("jsonObject"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("                    "),n("span",{class:"token class-name"},"String"),s(" value "),n("span",{class:"token operator"},"="),s(" jsonObject"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getAsString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("                    "),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},'" found: "'),s(),n("span",{class:"token operator"},"+"),s(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("                    "),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},'" not found"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("                "),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Response body is not valid JSON."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token class-name"},"InterruptedException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("err"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Error occurred: "'),s(),n("span",{class:"token operator"},"+"),s(" e"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMessage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token comment"},"// Check if a string is valid JSON")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isValidJson"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" json"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token class-name"},"JsonElement"),s(" jsonElement "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"JsonParser"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parseString"),n("span",{class:"token punctuation"},"("),s("json"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token keyword"},"return"),s(" jsonElement"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isJsonObject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(" jsonElement"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isJsonArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"JsonParseException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("            "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),a[8]||(a[8]=l(`<h3 id="重要信息" tabindex="-1"><a class="header-anchor" href="#重要信息"><span>重要信息</span></a></h3><div class="hint-container warning"><p class="hint-container-title">Important</p><p>由于通信问题，可能您请求大洋支付时发生了超时或没有收到任何响应，但实际上，大洋支付已经作出了正常的响应。在这种情况下，为了不造成您的资金损失，您应将您的订单状态设为“成功”，且不在其他第三方出款。</p></div><blockquote><p>张三叫李四去买一下单，李四说：“好的，老板。” 过了一会儿，张三问李四：“刚刚我叫你买单，你怎么都不回答我？我叫其他人买了”。李四想说的是：“老板，我有回答你，你没听到吗？”</p></blockquote><p>与大洋支付服务器通信测试示例：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token punctuation">\\</span></span>
<span class="line">  https://example.com/api/v1/transfers <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-d</span> <span class="token string">&#39;{</span>
<span class="line">    &quot;amount&quot;: &quot;50000.00&quot;,</span>
<span class="line">    &quot;channel_id&quot;: &quot;5001&quot;,</span>
<span class="line">    &quot;client_key&quot;: &quot;01j****************7h&quot;,</span>
<span class="line">    &quot;extra&quot;: &quot;{\\&quot;bank_code\\&quot;:\\&quot;AGR\\&quot;}&quot;,</span>
<span class="line">    &quot;notify_url&quot;: &quot;https://api.your-domain.com/webhook-for-dayangpay&quot;,</span>
<span class="line">    &quot;out_transfer_no&quot;: &quot;20240101000000123456&quot;,</span>
<span class="line">    &quot;payee_account&quot;: &quot;1234567890&quot;,</span>
<span class="line">    &quot;payee_name&quot;: &quot;PAYEE NAME&quot;,</span>
<span class="line">    &quot;signature&quot;: &quot;99c************************************de&quot;</span>
<span class="line">}&#39;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-w</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>DNS Lookup: %{time_namelookup}s<span class="token entity" title="\\n">\\n</span>Connection: %{time_connect}s<span class="token entity" title="\\n">\\n</span>Pretransfer: %{time_pretransfer}s<span class="token entity" title="\\n">\\n</span>Start Transfer: %{time_starttransfer}s<span class="token entity" title="\\n">\\n</span>Total Time: %{time_total}s<span class="token entity" title="\\n">\\n</span>&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DNS Lookup: 0.001148s</span>
<span class="line">Connection: 0.095378s</span>
<span class="line">Pretransfer: 0.241598s</span>
<span class="line">Start Transfer: 0.452405s</span>
<span class="line">Total Time: 0.452453s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7))])}const _=r(m,[["render",g],["__file","transfer.html.vue"]]),w=JSON.parse('{"path":"/zh/guide/transfer.html","title":"代付下单","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"HTTP头参数","slug":"http头参数","link":"#http头参数","children":[]},{"level":3,"title":"包体参数","slug":"包体参数","link":"#包体参数","children":[]},{"level":3,"title":"请求示例","slug":"请求示例","link":"#请求示例","children":[]},{"level":3,"title":"响应参数","slug":"响应参数","link":"#响应参数","children":[]},{"level":3,"title":"响应示例","slug":"响应示例","link":"#响应示例","children":[]},{"level":3,"title":"如何判断是否下单成功？","slug":"如何判断是否下单成功","link":"#如何判断是否下单成功","children":[]},{"level":3,"title":"重要信息","slug":"重要信息","link":"#重要信息","children":[]}],"git":{},"filePathRelative":"zh/guide/transfer.md"}');export{_ as comp,w as data};
