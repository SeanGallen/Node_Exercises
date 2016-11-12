<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="generator" content="pandoc">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
  <title>Felix's Node.js Beginners Guide</title>
  <style type="text/css">code{white-space: pre;}</style>
  <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <style type="text/css">
table.sourceCode, tr.sourceCode, td.lineNumbers, td.sourceCode {
  margin: 0; padding: 0; vertical-align: baseline; border: none; }
table.sourceCode { width: 100%; line-height: 100%; }
td.lineNumbers { text-align: right; padding-right: 4px; padding-left: 4px; color: #aaaaaa; border-right: 1px solid #aaaaaa; }
td.sourceCode { padding-left: 5px; }
code > span.kw { color: #007020; font-weight: bold; }
code > span.dt { color: #902000; }
code > span.dv { color: #40a070; }
code > span.bn { color: #40a070; }
code > span.fl { color: #40a070; }
code > span.ch { color: #4070a0; }
code > span.st { color: #4070a0; }
code > span.co { color: #60a0b0; font-style: italic; }
code > span.ot { color: #007020; }
code > span.al { color: #ff0000; font-weight: bold; }
code > span.fu { color: #06287e; }
code > span.er { color: #ff0000; font-weight: bold; }
  </style>
  <link rel="stylesheet" href="css/screen.css">
  <meta name="description" content="Unofficial guide to Node.JS">
  <meta name="author" content="Felix Geisendörfer">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div class="container">
<p>
  <a href="index.html">&#171; Home / All Guides</a>
</p>
<header>
<h1 class="title">Felix's Node.js Beginners Guide</h1>
</header>
<nav id="TOC">
<ul>
<li><a href="#learning-javascript">Learning JavaScript</a></li>
<li><a href="#hello-world-tutorial">Hello World Tutorial</a><ul>
<li><a href="#installation">Installation</a></li>
<li><a href="#the-interactive-node.js-shell">The interactive node.js shell</a></li>
<li><a href="#your-first-program">Your first program</a></li>
<li><a href="#a-hello-world-http-server">A hello world http server</a></li>
</ul></li>
<li><a href="#the-module-system">The module system</a></li>
<li><a href="#using-eventemitters">Using EventEmitters</a></li>
<li><a href="#next-steps">Next Steps</a></li>
<li><a href="#debugging-node.js-apps">Debugging node.js apps</a><ul>
<li><a href="#using-console.log">Using console.log()</a></li>
<li><a href="#using-the-node-debugger">Using the node debugger</a></li>
<li><a href="#using-the-webkit-inspector">Using the WebKit Inspector</a></li>
</ul></li>
<li><a href="#frameworks">Frameworks</a><ul>
<li><a href="#express">Express</a></li>
<li><a href="#fab.js">fab.js</a></li>
</ul></li>
<li><a href="#hosting-deployment">Hosting &amp; Deployment</a><ul>
<li><a href="#quick-dirty-deployment">Quick &amp; Dirty Deployment</a></li>
<li><a href="#joyent-no.de">Joyent no.de</a></li>
</ul></li>
</ul>
</nav>
<p>There is lots of information about node.js, but given the rapid pace at which it is developing, it can be difficult for beginners to find good, current information on how to get started. This guide aims to provide exactly that, whilst staying updated with the latest stable version of node.js.</p>
<p>This guide has been updated to reflect the latest changes in node 0.4.x, the currently stable branch of node.js.</p>
<h2 id="learning-javascript">Learning JavaScript</h2>
<p>This guide assumes that you are already familar with JavaScript. If you are not, you should go ahead and read: <a href="http://eloquentjavascript.net/">Eloquent JavaScript</a>, a free online book by <a href="http://twitter.com/marijnjh">Marijn Haverbeke</a>.</p>
<h2 id="hello-world-tutorial">Hello World Tutorial</h2>
<p>This tutorial guides you through installing node.js, including the creation of a simple hello world http server.</p>
<h3 id="installation">Installation</h3>
<p>First of all: You should run a *nix operating system in order to use node.js at this point. Linux and OSX are recommended, but you should also be able to use FreeBSD and cygwin (on windows). A full windows port of node.js is in the works, but it is not yet ready for public usage.</p>
<p>The most common way to install node.js is to directly compile it from the downloaded source code. There are also various packages available for different package managers, but since their update frequency varies, I recommend installing from source.</p>
<p>You can get the latest source code from <a href="http://nodejs.org/">nodejs.org</a>. Use the commands below to download and install v0.4.4:</p>
<pre class="shell"><code>$ wget http://nodejs.org/dist/node-v0.4.4.tar.gz
$ tar -xzf node-v0.4.4.tar.gz
$ cd node-v0.4.4
$ ./configure
$ sudo make install</code></pre>
<p>Node.js itself has no external dependencies except common build tools as well as pythons for the build system itself. On OSX you must install XCode for this to work, and on Ubuntu you probably have to run:</p>
<pre class="shell"><code>$ apt-get -y install build-essential</code></pre>
<h3 id="the-interactive-node.js-shell">The interactive node.js shell</h3>
<p>If everything worked, you should be able to invoke the interactive node.js shell like this:</p>
<pre class="shell"><code>$ node
&gt; console.log(&#39;Hello World&#39;);
Hello World</code></pre>
<p>The interactive shell (also called <a href="http://en.wikipedia.org/wiki/REPL">REPL</a>) is a great place to test simple one liners, and can also be directly <a href="http://nodejs.org/docs/v0.4.4/api/repl.html">embedded</a> into your node.js applications. In order to get out of it, simply press Ctrl + C.</p>
<p>The REPL also comes with many other great features, most importantly tab auto-completion.</p>
<h3 id="your-first-program">Your first program</h3>
<p>Writing a node.js program is as simple as creating a new file with a '.js' extension. For example you could create a simple 'hello_world.js' file with the following content:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="ot">console</span>.<span class="fu">log</span>(<span class="st">&#39;Hello World&#39;</span>);</code></pre>
<p>After you have saved the file, you can execute it from your terminal like so:</p>
<pre class="shell"><code>$ node hello.js
Hello World</code></pre>
<h3 id="a-hello-world-http-server">A hello world http server</h3>
<p>Now printing hello world to a terminal isn't all that exciting. Let's take the next step and write a program that responds to hello world via http. We'll call the file 'hello_http.js' and put the following code into it:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">var</span> http = <span class="fu">require</span>(<span class="st">&#39;http&#39;</span>);

<span class="kw">var</span> server = <span class="ot">http</span>.<span class="fu">createServer</span>(<span class="kw">function</span>(req, res) {
  r<span class="ot">es</span>.<span class="fu">writeHead</span>(<span class="dv">200</span>);
  r<span class="ot">es</span>.<span class="fu">end</span>(<span class="st">&#39;Hello Http&#39;</span>);
});
<span class="ot">server</span>.<span class="fu">listen</span>(<span class="dv">8080</span>);</code></pre>
<p>Now lets run this program from the terminal by typing:</p>
<pre class="shell"><code>$ node hello_http.js</code></pre>
<p>The first thing you'll notice is that this program, unlike our first one, doesn't exit right away. That's because a node program will always run until it's certain that no further events are possible. In this case the open http server is the source of events that will keep things going.</p>
<p>Testing the server is as simple as opening a new browser tab, and navigating to the following url: <a href="http://localhost:8080/">http://localhost:8080/</a>. As expected, you should see a response that reads: 'Hello Http'.</p>
<p>Alternatively, you could also open up a new terminal and use curl to test your server:</p>
<pre class="shell"><code>$ curl localhost:8080
Hello Http</code></pre>
<p>Now let's have a closer look at the steps involved in our little program. In the first line, we include the http core module and assign it to a variable called http. You will find more information on this in the next section about the module system.</p>
<p>Next we create a variable called server by calling <code>http.createServer</code>. The argument passed into this call is a closure that is called whenever an http request comes in.</p>
<p>Finally we call <code>server.listen(8080)</code> to tell node.js the port on which we want our server to run. If you want to run on port 80, your program needs to be executed as root.</p>
<p>Now when you point your browser to 'localhost:8080', the connection closure is invoked with a <code>req</code> and <code>res</code> object. The <code>req</code> is a readable stream that emits 'data' events for each incoming piece of data (like a form submission or file upload). The <code>res</code> object is a writable stream that is used to send data back to the client. In our case we are simply sending a 200 OK header, as well as the body 'Hello Http'.</p>
<h2 id="the-module-system">The module system</h2>
<p>In order to structure your program into different files, node.js provides you with a simple module system.</p>
<p>To illustrate the approach, let's create a new file called 'main.js' with the following content:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">var</span> hello = <span class="fu">require</span>(<span class="st">&#39;./hello&#39;</span>);
<span class="ot">hello</span>.<span class="fu">world</span>();</code></pre>
<p>As you have probably guessed, the <code>require('./hello')</code> is used to import the contents from another JavaScript file. The initial './' indicates that the file is located in the same directory as 'main.js'. Also note that you don't have to provide the file extension, as '.js' is assumed by default.</p>
<p>So let's go ahead and create our 'hello.js' file, with the following content:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="ot">exports</span>.<span class="fu">world</span> = <span class="kw">function</span>() {
  c<span class="ot">onsole</span>.<span class="fu">log</span>(<span class="st">&#39;Hello World&#39;</span>);
}</code></pre>
<p>What you notice here, is that we are assigning a property called 'world' to an object called 'exports'. Such an 'exports' object is available in every module, and it is returned whenever the <code>require</code> function is used to include the module. If we now go ahead and run our 'main.js' program, we will see the expected output:</p>
<pre class="shell"><code>$ node main.js
Hello World</code></pre>
<p>At this point it should also be mentioned that many node users are overwriting the exports object directly like so:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="ot">module</span>.<span class="fu">exports</span> = <span class="kw">function</span>() {
  <span class="co">// ...</span>
}</code></pre>
<p>As you might have expected, this will directly cause the <code>require</code> function to return the assigned function. This is useful if you're doing <a href="object_oriented_programming.html">object oriented programming</a>, where each file exports the constructor of one class.</p>
<p>The next thing you need to know about the module system is how it deals with <code>require</code> calls that don't include a relative hint about the location of the included file. Take for example:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">var</span> http = <span class="fu">require</span>(<span class="st">&#39;http&#39;</span>);</code></pre>
<p>What node.js will do in this case, is to first look if there is a core module named http, and since that's the case, return that directly. But what about non-core modules, such as 'mysql'?</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">var</span> mysql = <span class="fu">require</span>(<span class="st">&#39;mysql&#39;</span>);</code></pre>
<p>In this case node.js will walk up the directory tree, moving through each parent directory in turn, checking in each to see if there is a folder called 'node_modules'. If such a folder is found, node.js will look into this folder for a file called 'mysql.js'. If no matching file is found and the directory root '/' is reached, node.js will give up and throw an exception.</p>
<p>At this point node.js also considers an additional, mutable list of alternative include directories which are accessible through the <code>require.paths</code> array. However, there is intense debate about removing this feature, so you are probably better off ignoring it.</p>
<p>Last but not least, node.js also lets you create an 'index.js' file, which indicates the main include file for a directory. So if you call <code>require('./foo')</code>, both a 'foo.js' file as well as an 'foo/index.js' file will be considered, this goes for non-relative includes as well.</p>
<h2 id="using-eventemitters">Using EventEmitters</h2>
<p>Node.js implements the <a href="http://en.wikipedia.org/wiki/Observer_pattern">observer pattern</a> using a class called EventEmitter. Whenever there is an object that represents the source of several kinds of events, node.js usually makes the underlaying class inherit from EventEmitter.</p>
<p>Using EventEmitter's is pretty straight-forward. You can listen to a specific event by calling the 'on()' function on your object, providing the name of the event, as well as a callback closure as the parameters. For example:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">var</span> data = <span class="st">&#39;&#39;</span>;
req
  .<span class="fu">on</span>(<span class="st">&#39;data&#39;</span>, <span class="kw">function</span>(chunk) {
    data += chunk;
  })
  .<span class="fu">on</span>(<span class="st">&#39;end&#39;</span>, <span class="kw">function</span>() {
    c<span class="ot">onsole</span>.<span class="fu">log</span>(<span class="st">&#39;POST data: %s&#39;</span>, data);
  })</code></pre>
<p>As you can see, the <code>on()</code> function also returns a reference to the object it belongs to, allowing you to chain several of such event listeners.</p>
<p>If you're only interested in the first occurrence of an event, you can use the <code>once()</code> function instead.</p>
<p>Finally, you can remove event listeners by using the <code>removeListener</code> function. Please note that the argument to this function is a reference to the callback you are trying to remove, not the name of the event:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">var</span> onData = <span class="kw">function</span>(chunk) {
  c<span class="ot">onsole</span>.<span class="fu">log</span>(chunk);
  r<span class="ot">eq</span>.<span class="fu">removeListener</span>(onData);
}

<span class="ot">req</span>.<span class="fu">on</span>(<span class="st">&#39;data&#39;</span>, onData);</code></pre>
<p>The example above is essentially identical to the <code>once()</code> function.</p>
<h2 id="next-steps">Next Steps</h2>
<p>Now that you know your node.js basics, you're probably best off by writing a few little programs yourself. The best place to start out is <a href="http://nodejs.org/docs/v0.4.4/api/">node's api documentation</a>, using it as a source of inspiration for something you want to play with.</p>
<h2 id="debugging-node.js-apps">Debugging node.js apps</h2>
<p>There are many ways to debug your node.js based applications. Personally I prefer to do as little debugging as possible, so I strictly follow the advice of the <a href="test_driven_development.html">test driven development guide</a>.</p>
<p>However, if you find yourself in a situation where you need to locate a tricky bug in an existing applications, here are a few approaches that can help.</p>
<h3 id="using-console.log">Using console.log()</h3>
<p>The easiest way to understand a problem is by inspecting objects using console.log(). You can either directly pass in objects as parameters:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">var</span> foo = {<span class="dt">bar</span>: <span class="st">&#39;foobar&#39;</span>};
<span class="ot">console</span>.<span class="fu">log</span>(foo);</code></pre>
<p>Or you can use its sprintf()-like capabilities to format your debug output:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">var</span> foo = {<span class="dt">bar</span>: <span class="st">&#39;foobar&#39;</span>};
<span class="ot">console</span>.<span class="fu">log</span>(<span class="st">&#39;Hello %s, this is my object: %j&#39;</span>, <span class="st">&#39;World&#39;</span>, foo);</code></pre>
<h3 id="using-the-node-debugger">Using the node debugger</h3>
<p>If console.log() isn't your thing, or you think your problem can be better analyzed using breakpoints, the node's built-in debugger is a great choice. You can invoke the debugger by simply calling:</p>
<pre class="shell"><code>$ node debug my_file.js</code></pre>
<p><em>Work in progress, please come back later ...</em></p>
<h3 id="using-the-webkit-inspector">Using the WebKit Inspector</h3>
<p><em>Work in progress, please come back later ...</em></p>
<h2 id="frameworks">Frameworks</h2>
<p>If you're new to node.js, you might not want to re-invent the wheel when it comes to parsing POST requests, routing urls or rendering views. In this case, you probably want to use one of the popular web frameworks. This section gives you a quick overview over the popular choices, and my opinionated take on them.</p>
<h3 id="express">Express</h3>
<p>At this point <a href="http://expressjs.com/">express</a> is probably the go-to framework for most node.js developers. It's relatively mature, and includes the <a href="https://github.com/senchalabs/connect">connect</a> (think rack) middleware layer. Included in the package are routing, configuration, a template engine, POST parsing and many other features.</p>
<p>While express is a solid framework, it's currently addressing a much smaller scope than fullstack frameworks like Rails, CakePHP or Django. It's more comparable to Sinatra, and unfortunately doesn't really make a big effort to differentiate itself from its Ruby roots into something that feels natural in JavaScript. Anyhow, short of writing your own framework, it's certainly a great choice at this point.</p>
<h3 id="fab.js">fab.js</h3>
<p>You think you know JavaScript? Think again. Originally inspired by jQuery's chaining, <a href="https://github.com/jed/fab">fab.js</a> has taken a very unconventional approach of twisting JavaScript beyond most peoples brain capacity. Each function returns another function, eliminating the need for method names altogether, while giving the resulting code a lisp-esque look &amp; feel.</p>
<p>At this point I don't consider fab.js production-ready, but if you're still exploring the world of node.js, you should absolutely try it out at least once. If nothing else, fab.js shows the world that JavaScript doesn't have to copy Ruby, Python or PHP when it comes to web frameworks, and can go its own unique ways.</p>
<h2 id="hosting-deployment">Hosting &amp; Deployment</h2>
<h3 id="quick-dirty-deployment">Quick &amp; Dirty Deployment</h3>
<p>If you have just written your first node.js application, and you want to get it running as fast as possible, this is how to do it:</p>
<ol type="1">
<li>Copy your program to the server you want to run it on. If you're using git, this probably just means to clone the repository from another server or service like <a href="http://github.com/">GitHub</a>.</li>
</ol>
<ol start="2" type="1">
<li><p>Assuming your project contains a 'server.js' file, navigate to the directory containing it, then type:</p>
<pre class="shell"><code>$ screen
$ node server.js</code></pre></li>
</ol>
<p>This invokes your 'server.js' program inside a so called screen session. Screen is a tool that provides you with a shell that remains its state, even when you close the terminal app you used to login to your server.</p>
<p>So you can now safely close your terminal app, and your 'server.js' will continue running. If you want to monitor it, you can log into your server again, and type:</p>
<pre class="shell"><code>$ screen -r</code></pre>
<p>This will reconnect you to the backgrounded shell running your program.</p>
<p>However, this approach is only recommended for experimental deployments. If your node applications crashes at some point, screen will not try to restart it, so don't use this method for production applications.</p>
<h3 id="joyent-no.de">Joyent no.de</h3>
<p><em>Work in progress, please come back later ...</em></p>
  <div class="copyright">
  © 2011, <a href="http://debuggable.com/">Debuggable Limited</a>.
  </div>
</div>

<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-3306079-11']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
</body>
</html>
