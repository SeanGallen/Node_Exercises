<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<title>Node Hero: Understanding Async Programming in Node.js</title>
<meta name="description" content="The 3rd part of Node Hero, RisingStack&#x27;s tutorial series. In this chapter, you&#x27;ll learn async programming principles, and how can you do async Node.js."/>
<meta name="HandheldFriendly" content="True"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="google-site-verification" content="1VZwYFsfiVb7eRGn7Hx4CQN2PHLUmbYZnlJOXrBaCPA"/>
<link rel="icon" type="image/png" sizes="192x192" href="/assets/favicons/android-chrome-192x192.png?v=d754197014">
<link rel="manifest" href="/assets/favicons/manifest.json?v=d754197014">
<link rel="apple-touch-icon" sizes="57x57" href="/assets/favicons/apple-touch-icon-57x57.png?v=d754197014">
<link rel="apple-touch-icon" sizes="60x60" href="/assets/favicons/apple-touch-icon-60x60.png?v=d754197014">
<link rel="apple-touch-icon" sizes="72x72" href="/assets/favicons/apple-touch-icon-72x72.png?v=d754197014">
<link rel="apple-touch-icon" sizes="76x76" href="/assets/favicons/apple-touch-icon-76x76.png?v=d754197014">
<link rel="apple-touch-icon" sizes="114x114" href="/assets/favicons/apple-touch-icon-114x114.png?v=d754197014">
<link rel="apple-touch-icon" sizes="120x120" href="/assets/favicons/apple-touch-icon-120x120.png?v=d754197014">
<link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-touch-icon-144x144.png?v=d754197014">
<link rel="apple-touch-icon" sizes="152x152" href="/assets/favicons/apple-touch-icon-152x152.png?v=d754197014">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon-180x180.png?v=d754197014">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="RisingStackBlog">
<link rel="icon" type="image/png" sizes="228x228" href="/assets/favicons/coast-228x228.png?v=d754197014">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png?v=d754197014">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png?v=d754197014">
<link rel="icon" type="image/png" sizes="96x96" href="/assets/favicons/favicon-96x96.png?v=d754197014">
<link rel="icon" type="image/png" sizes="230x230" href="/assets/favicons/favicon-230x230.png?v=d754197014">
<link rel="shortcut icon" href="/assets/favicons/favicon.ico?v=d754197014">
<link rel="yandex-tableau-widget" href="/assets/favicons/yandex-browser-manifest.json?v=d754197014">
<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href="/assets/favicons/apple-touch-startup-image-320x460.png?v=d754197014">
<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href="/assets/favicons/apple-touch-startup-image-640x920.png?v=d754197014">
<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="/assets/favicons/apple-touch-startup-image-640x1096.png?v=d754197014">
<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="/assets/favicons/apple-touch-startup-image-750x1294.png?v=d754197014">
<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href="/assets/favicons/apple-touch-startup-image-1182x2208.png?v=d754197014">
<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href="/assets/favicons/apple-touch-startup-image-1242x2148.png?v=d754197014">
<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href="/assets/favicons/apple-touch-startup-image-748x1024.png?v=d754197014">
<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href="/assets/favicons/apple-touch-startup-image-768x1004.png?v=d754197014">
<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href="/assets/favicons/apple-touch-startup-image-1496x2048.png?v=d754197014">
<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href="/assets/favicons/apple-touch-startup-image-1536x2008.png?v=d754197014">
<link rel="stylesheet" type="text/css" href="/assets/css/screen.css?v=d754197014"/>
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
<link rel="canonical" href="http://blog.risingstack.com/node-hero-async-programming-in-node-js/"/>
<meta name="referrer" content="no-referrer-when-downgrade"/>
<link rel="amphtml" href="http://blog.risingstack.com/node-hero-async-programming-in-node-js/amp/"/>
<meta property="og:site_name" content="RisingStack Engineering"/>
<meta property="og:type" content="article"/>
<meta property="og:title" content="Node Hero: Understanding Async Programming in Node.js"/>
<meta property="og:description" content="The 3rd part of Node Hero, RisingStack&#x27;s tutorial series. In this chapter, you&#x27;ll learn async programming principles, and how can you do async Node.js."/>
<meta property="og:url" content="http://blog.risingstack.com/node-hero-async-programming-in-node-js/"/>
<meta property="og:image" content="https://risingstack-blog.s3.amazonaws.com/2016/Jun/non_async_blocking_operations_example_in_node_hero_1459856858194-1466683867567.png"/>
<meta property="article:published_time" content="2016-04-05T11:50:49.000Z"/>
<meta property="article:modified_time" content="2016-10-19T20:37:53.000Z"/>
<meta property="article:tag" content="nodejs"/>
<meta property="article:tag" content="nodehero"/>
<meta property="article:tag" content="tutorial"/>
<meta property="article:tag" content="async programming"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Node Hero: Understanding Async Programming in Node.js"/>
<meta name="twitter:description" content="The 3rd part of Node Hero, RisingStack&#x27;s tutorial series. In this chapter, you&#x27;ll learn async programming principles, and how can you do async Node.js."/>
<meta name="twitter:url" content="http://blog.risingstack.com/node-hero-async-programming-in-node-js/"/>
<meta name="twitter:image" content="https://risingstack-blog.s3.amazonaws.com/2016/Jun/non_async_blocking_operations_example_in_node_hero_1459856858194-1466683867567.png"/>
<meta name="twitter:label1" content="Written by"/>
<meta name="twitter:data1" content="Gergely Nemeth"/>
<meta name="twitter:label2" content="Filed under"/>
<meta name="twitter:data2" content="nodejs, nodehero, tutorial, async programming"/>
<meta name="twitter:site" content="@risingstack"/>
<meta property="og:image:width" content="908"/>
<meta property="og:image:height" content="562"/>
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "publisher": {
        "@type": "Organization",
        "name": "RisingStack Engineering",
        "logo": "https://risingstack-blog.s3.amazonaws.com/2016/Mar/risingstack_logo-1457001742686.png"
    },
    "author": {
        "@type": "Person",
        "name": "Gergely Nemeth",
        "image": {
            "@type": "ImageObject",
            "url": "//www.gravatar.com/avatar/302ec98934a517eec6c10b05e64d82c1?s=250&d=mm&r=x",
            "width": 250,
            "height": 250
        },
        "url": "http://blog.risingstack.com/author/gergely/",
        "sameAs": [],
        "description": "Node.js and microservices, organizer of @Oneshotbudapest @nodebp @jsconfbp"
    },
    "headline": "Node Hero: Understanding Async Programming in Node.js",
    "url": "http://blog.risingstack.com/node-hero-async-programming-in-node-js/",
    "datePublished": "2016-04-05T11:50:49.000Z",
    "dateModified": "2016-10-19T20:37:53.000Z",
    "image": {
        "@type": "ImageObject",
        "url": "https://risingstack-blog.s3.amazonaws.com/2016/Jun/non_async_blocking_operations_example_in_node_hero_1459856858194-1466683867567.png",
        "width": 908,
        "height": 562
    },
    "keywords": "nodejs, nodehero, tutorial, async programming",
    "description": "The 3rd part of Node Hero, RisingStack&#x27;s tutorial series. In this chapter, you&#x27;ll learn async programming principles, and how can you do async Node.js.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "http://blog.risingstack.com"
    }
}
    </script>
<meta name="generator" content="Ghost 0.11"/>
<link rel="alternate" type="application/rss+xml" title="RisingStack Engineering" href="http://blog.risingstack.com/rss/"/>
 
<script type="text/javascript">
	var $mcGoal = {'settings':{'uuid':'510d6f81b948a39e0d9c32ec3','dc':'us9'}};
	(function() {
		 var sp = document.createElement('script'); sp.type = 'text/javascript'; sp.async = true; sp.defer = true;
		sp.src = ('https:' == document.location.protocol ? 'https://s3.amazonaws.com/downloads.mailchimp.com' : 'http://downloads.mailchimp.com') + '/js/goal.min.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sp, s);
	})(); 
</script>
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="/assets/css/prism.css?v=d754197014"/>
 
<style type="text/css">#mc_embed_signup{clear:left;}</style>
</head>
<body class="post-template tag-nodejs-2 tag-nodehero tag-tutorial tag-async-programming">
 
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-KV8B2T" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KV8B2T');</script>
 
<div id="sidebar">
<div id="sidebar-content" class="inner">
<div class="risingstack-brand-centered">
<div class="risingstack-brand">
<img src="https://resources.risingstack.com/risingstack-logo.png" alt="RisingStack logo"/>
<h2 class="blog-title"><a href="http://blog.risingstack.com">RisingStack Engineering</a></h2>
</div>
</div>
<div class="clearfix"></div>
<h3 class="blog-description">Engineering blog for all-the-things Node.js / JavaScript.
</h3>
<div id="mc_embed_signup">
<hr style="margin: 0.5em;"/>
<form action="//risingstack.us9.list-manage.com/subscribe/post?u=510d6f81b948a39e0d9c32ec3&amp;id=02a6a69990" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
<label for="mce-EMAIL">Subscribe to our newsletter</label>
<input id="mailchimp-email" type="email" value="" name="EMAIL" placeholder="email address" required>
 
<input id="mailchimp-submit" type="submit" value="Subscribe" name="subscribe">
<div style="position: absolute; left: -5000px;"><input type="text" name="b_510d6f81b948a39e0d9c32ec3_02a6a69990" tabindex="-1" value=""></div>
</form>
</div>
<a class="trace-sidebar" href="https://trace.risingstack.com?utm_source=rsblog&utm_medium=sideblock&utm_campaign=trace&utm_content=Node Hero - Understanding Async Programming in Node.js" target="_blank">
<img src="https://blog-assets.risingstack.com/2016/Sep/side-trace/debugging-made-easy.png"/>
</a>
<div id="sidebar-links">
<ul id="subscription-links">
</ul>
<ul id="sidebar-internal">
 
</ul>
<ul id="sidebar-external">
<div id="follow-us">
<h3 class="sidebar-header">Follow us</h3>
<a href="https://blog.risingstack.com/rss/" target="_blank"><img src="https://resources.risingstack.com/icon_rss.png"/></a>
<a href="https://github.com/risingstack" target="_blank"><img src="https://resources.risingstack.com/icon_github.png"/></a>
<a href="https://twitter.com/risingstack" target="_blank"><img src="https://resources.risingstack.com/icon_twitter.png"/></a>
<a href="https://facebook.com/risingstack" target="_blank"><img src="https://resources.risingstack.com/icon_facebook.png"/></a>
</div>
 
<li class="external-link">
<a href="https://blog.risingstack.com/articles/">
<i class="fa fa-list-ul"></i>Best articles
</a>
</li>
<li>
<a href="https://risingstack.com">
<i class="fa fa-globe"></i>RisingStack Website
</a>
</li>
 
</ul>
</div>
<footer class="site-footer">
<section class="copyright">&copy; 2016 <a href="/cdn-cgi/l/email-protection#82ebece4edc2f0ebf1ebece5f1f6e3e1e9ace1edef">RisingStack Inc.</a> &bull; All rights reserved.
| <a href="http://blog.risingstack.com/privacy-policy">Privacy Policy</a></section>
</footer>
</div>
</div>
<main>
<div class="main-inner">
<section id="results"></section>
<article class="post-page post tag-nodejs-2 tag-nodehero tag-tutorial tag-async-programming">
<header class="post-header">
<h1 class="post-title">Node Hero - Understanding Async Programming in Node.js</h1>
<section class="post-meta">
<span class="post-time">
<i class='fa fa-calendar'></i>
<time datetime="2016-04-05" class="timeago">7 months ago</time>
<time datetime="2016-04-05" class="fulldate">April 5th, 2016</time>
</span>
<br><i class='fa fa-tag'></i> <a href="/tag/nodejs-2/">nodejs</a> · <a href="/tag/nodehero/">nodehero</a> · <a href="/tag/tutorial/">tutorial</a> · <a href="/tag/async-programming/">async programming</a>
</section>
</header>
<section class="post-content">
<blockquote>
<p><a href="https://nodeconf.risingstack.com/">NodeConf Budapest</a> - One day, single track Node.js conference in the heart of Europe. Get your ticket with 20% off using the <a href="https://ti.to/risingstack/nodeconf-budapest/discount/TRACE">TRACE</a> discount code!</p>
</blockquote>
<hr/>
<p>This is the third post of the tutorial series called Node Hero - in these chapters you can learn how to get started with Node.js and deliver software products using it. </p>
<p>In this chapter, I’ll guide you through async programming principles, and show you how to do async in JavaScript and Node.js.</p>
<p>Upcoming and past chapters:</p>
<ol>
<li><a href="/node-hero-tutorial-getting-started-with-node-js">Getting started with Node.js</a> </li>
<li><a href="/node-hero-npm-tutorial">Using NPM</a> </li>
<li>Understanding async programming <em>[you are reading it now]</em> </li>
<li><a href="/your-first-node-js-http-server/">Your first Node.js server</a> </li>
<li><a href="/node-js-database-tutorial">Node.js database tutorial</a> </li>
<li><a href="/node-hero-node-js-request-module-tutorial">Node.js request module tutorial</a> </li>
<li><a href="/node-hero-node-js-project-structure-tutorial">Node.js project structure tutorial</a> </li>
<li><a href="/node-hero-node-js-authentication-passport-js/">Node.js authentication using Passport.js</a> </li>
<li><a href="/node-hero-node-js-unit-testing-tutorial">Node.js unit testing tutorial</a> </li>
<li><a href="/node-hero-node-js-debugging-tutorial/">Debugging Node.js applications</a> </li>
<li><a href="/node-hero-node-js-security-tutorial/">Node.js Security Tutorial</a> </li>
<li><a href="/node-hero-deploy-node-js-heroku-docker/">How to Deploy Node.js Applications</a> </li>
<li><a href="/node-hero-monitoring-node-js-applications/">Monitoring Node.js Applications</a></li>
</ol>
<h2 id="synchronousprogramming">Synchronous Programming</h2>
<p>In traditional programming practice, most I/O operations happen synchronously. If you think about Java, and about how you would read a file using Java, you would end up with something like this:</p>
<pre><code class="language-java">try(FileInputStream inputStream = new FileInputStream("foo.txt")) {  
    Session IOUtils;
    String fileContent = IOUtils.toString(inputStream);
}
</code></pre>
<p>What happens in the background? The main thread will be blocked until the file is read, which means that nothing else can be done in the meantime. To solve this problem and utilize your CPU better, you would have to manage threads manually.</p>
<p>If you have more blocking operations, the event queue gets even worse:</p>
<p><img src="http://blog-assets.risingstack.com/2016/Apr/non_async_blocking_operations_example_in_node_hero-1459856858194.png" alt="Non-async blocking operations example in Node Hero tutorial series."/>
<em>(The <strong style="color:red;">red bars</strong> show when the process is waiting for an external resource's response and is blocked, the <strong style="color:black;">black bars</strong> show when your code is running, the <strong style="color:green;">green bars</strong> show the rest of the application)</em></p>
<p><strong>To resolve this issue, Node.js introduced an asynchronous programming model.</strong></p>
<p><br> <br/>
<a class="trace-in-text-cta" href="https://trace.risingstack.com/?utm_source=blog&amp;utm_medium=roadblock&amp;utm_content=debugging&amp;utm_campaign=trace" target="_blank">Node.js Debugging Made Easy - check out <strong>Trace by RisingStack!</strong></a> <br/>
<br></p>
<h2 id="asynchronousprogramminginnodejs">Asynchronous programming in Node.js</h2>
<blockquote>
<p>Asynchronous I/O is a form of input/output processing that permits other processing to continue before the transmission has finished.</p>
</blockquote>
<p>In the following example, I will show you a simple file reading process in Node.js - both in a synchronous and asynchronous way, with the intention of show you what can be achieved by avoiding blocking your applications.</p>
<p>Let's start with a simple example - reading a file using Node.js in a synchronous way:</p>
<pre><code class="language-javascript">const fs = require('fs')  
let content  
try {  
  content = fs.readFileSync('file.md', 'utf-8')
} catch (ex) {
  console.log(ex)
}
console.log(content)  
</code></pre>
<p>What did just happen here? We tried to read a file using the synchronous interface of the <code>fs</code> module. It works as expected - the <code>content</code> variable will contain the content of <code>file.md</code>. The problem with this approach is that Node.js will be blocked until the operation is finished - meaning it can do absolutely nothing while the file is being read.</p>
<p>Let's see how we can fix it!</p>
<p>Asynchronous programming - as we know now in JavaScript - can only be achieved with functions being first-class citizens of the language: they can be passed around like any other variables to other functions. <strong>Functions that can take other functions as arguments are called <a href="https://blog.risingstack.com/functional-ui-and-components-as-higher-order-functions/">higher-order functions.</a></strong></p>
<p>One of the easiest example for higher order functions:</p>
<pre><code class="language-javascript">const numbers = [2,4,1,5,4]

function isBiggerThanTwo (num) {  
  return num &gt; 2
}

numbers.filter(isBiggerThanTwo)  
</code></pre>
<p>In the example above we pass in a function to the filter function. This way we can define the filtering logic.</p>
<p>This is how callbacks were born: if you pass a function to another function as a parameter, you can call it within the function when you are finished with your job. No need to return values, only calling another function with the values.</p>
<p>These so-called error-first callbacks are in the heart of Node.js itself - the core modules are using it as well as most of the modules found on <a href="/node-hero-npm-tutorial">NPM</a>.</p>
<pre><code class="language-javascript">const fs = require('fs')  
fs.readFile('file.md', 'utf-8', function (err, content) {  
  if (err) {
    return console.log(err)
  }

  console.log(content)
})
</code></pre>
<p>Things to notice here:</p>
<ul>
<li><strong>error-handling</strong>: instead of a <code>try-catch</code> block you have to check for errors in the callback</li>
<li><strong>no return value</strong>: async functions don't return values, but values will be passed to the callbacks</li>
</ul>
<p>Let's modify this file a little bit to see how it works in practice: </p>
<pre><code class="language-javascript">const fs = require('fs')

console.log('start reading a file...')

fs.readFile('file.md', 'utf-8', function (err, content) {  
  if (err) {
    console.log('error happened during reading the file')
    return console.log(err)
  }

  console.log(content)
})

console.log('end of the file')  
</code></pre>
<p>The output of this script will be:</p>
<pre><code>start reading a file...  
end of the file  
error happened during reading the file  
</code></pre>
<p>As you can see once we started to read our file the execution continued, and the application printed <code>end of the file</code>. Our callback was only called once the file read was finished. How is it possible? <strong>Meet the event loop.</strong></p>
<h2 id="theeventloop">The Event Loop</h2>
<p>The event loop is in the heart of Node.js / Javascript - it is responsible for scheduling asynchronous operations.</p>
<p>Before diving deeper, let's make sure we understand what event-driven programming is.</p>
<blockquote>
<p>Event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs/threads.</p>
</blockquote>
<p>In practice, it means that applications act on events.</p>
<p>Also, as we have already learned in the first chapter, Node.js is single-threaded - from a developer's point of view. It means that you don't have to deal with threads and synchronizing them, Node.js abstracts this complexity away. Everything except your code is executing in parallel.</p>
<p>To understand the event loop more in-depth, continue watching this video:</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/8aGhZQkoFbQ" frameborder="0" allowfullscreen></iframe>
<h2 id="asynccontrolflow">Async Control Flow</h2>
<p>As now you have a basic understanding of how async programming works in JavaScript, let's take a look at a few examples on how you can organize your code.</p>
<h3 id="asyncjs">Async.js</h3>
<p>To avoid the so-called <a href="http://callbackhell.com/">Callback-Hell</a> one thing you can do is to start using <a href="https://github.com/caolan/async">async.js</a>.</p>
<p>Async.js helps to structure your applications and makes control flow easier. </p>
<p>Let’s check a short example of using Async.js, and then rewrite it by using Promises. </p>
<p>The following snippet maps through three files for stats on them:</p>
<pre><code class="language-javascript">async.parallel(['file1', 'file2', 'file3'], fs.stat, function (err, results) {  
    // results is now an array of stats for each file
})
</code></pre>
<h3 id="promises">Promises</h3>
<blockquote>
<p>The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet but is expected in the future.</p>
</blockquote>
<p>In practice, the previous example could be rewritten as follows:</p>
<pre><code class="language-javascript">function stats (file) {  
  return new Promise((resolve, reject) =&gt; {
    fs.stat(file, (err, data) =&gt; {
      if (err) {
        return reject (err)
      }
      resolve(data)
    })
  })
}

Promise.all([  
  stats('file1'),
  stats('file2'),
  stats('file3')
])
.then((data) =&gt; console.log(data))
.catch((err) =&gt; console.log(err))
</code></pre>
<p>Of course, if you use a method that has a Promise interface, then the Promise example can be a lot less in line count as well.</p>
<p><a href="https://risingstack.com/resources/node-hero?utm_source=rsblog&amp;utm_medium=get-node-hero&amp;utm_campaign=node-hero&amp;utm_content=nh3-async"><img src="https://blog-assets.risingstack.com/static/get-node-hero/get-the-whole-node-hero.png" alt="Download the whole Node Hero series as a single pdf" title=""/></a> </p>
<h2 id="nextupyourfirstnodejsserver">Next Up: Your First Node.js Server</h2>
<p>In the next chapter, you will learn how to fire up <a href="/your-first-node-js-http-server/">your first Node.js HTTP server</a> - subscribe to our newsletter for updates.</p>
<p>In the meantime if you have any questions, don't hesitate to ask!</p>
</section>
<footer class="post-footer">
<figure class="author-image">
<a class="img" href="/author/gergely/" style="background-image: url(//www.gravatar.com/avatar/302ec98934a517eec6c10b05e64d82c1?s&#x3D;250&amp;d&#x3D;mm&amp;r&#x3D;x)"><span class="hidden">Gergely Nemeth's Picture</span></a>
</figure>
<section class="author">
<h4><a href="/author/gergely/">Gergely Nemeth</a></h4>
<p>Node.js and microservices, organizer of @Oneshotbudapest @nodebp @jsconfbp</p>
<div class="author-meta">
</div>
</section>
</footer>
<a href="https://trace.risingstack.com/?utm_source=risingstack&utm_medium=blog&utm_content=Node Hero - Understanding Async Programming in Node.js&utm_campaign=trace" target="_blank">
<img src="https://blog-assets.risingstack.com/static/distributed-tracing.png" alt="Trace - Node.js and microservice monitoring" style="max-width: 100%; margin: 0px;">
</a>
<div class="bottom-navigation">
<span>Read more from us:</span>
<ul style="margin: 0px;">
<li>
<a class="post-nav-item post-nav-prev" href="/node-hero-npm-tutorial/">Node Hero - Using NPM: Tutorial</a>
</li>
<li>
<a class="post-nav-item post-nav-next" href="/monitoring-microservices-architectures/">Monitoring Microservices Architectures: Enterprise Best Practices</a>
</li>
</ul>
</div>
<div id="mc_embed_signup">
<form action="//risingstack.us9.list-manage.com/subscribe/post?u=510d6f81b948a39e0d9c32ec3&amp;id=02a6a69990" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
<label for="mce-EMAIL">Get early access to our posts</label>
<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
 
<div style="position: absolute; left: -5000px;"><input type="text" name="b_510d6f81b948a39e0d9c32ec3_02a6a69990" tabindex="-1" value=""></div>
<div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
</form>
</div>
<section class="post-comments">
<div id="disqus_thread"></div>
<script type="text/javascript">
                /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
                var disqus_shortname = 'risingstackblog';
                /* * * DON'T EDIT BELOW THIS LINE * * */
                (function() {
                    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                })();
            </script>
<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
<a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
</section>
</article>
</div>
</main>
<script>
    console.log("______  _       _                _____  _                 _    \n| ___ \\(_)     (_)              /  ___|| |               | |   \n| |_/ / _  ___  _  _ __    __ _ \\ `--. | |_   __ _   ___ | | __\n|    / | |/ __|| || '_ \\  / _` | `--. \\| __| / _` | / __|| |/ /\n| |\\ \\ | |\\__ \\| || | | || (_| |/\\__/ /| |_ | (_| || (__ |   < \n\\_| \\_||_||___/|_||_| |_| \\__, |\\____/  \\__| \\__,_| \\___||_|\\_\\\n                           __/ |                               \n                          |___/                                \n");
    console.log("You like to look under the hood? Why not join us? https://risingstack.workable.com")
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="/assets/js/jquery.fitvids.js?v=d754197014"></script>
<script type="text/javascript" src="/assets/js/index.js?v=d754197014"></script>
<script type="text/javascript" src="/assets/js/prism-loader.js?v=d754197014"></script>
<script type="text/javascript" src="/assets/js/prism.js?v=d754197014"></script>
<script src="/assets/js/jquery.ghostHunter.min.js?v=d754197014"></script>
<script type="text/html" id="search_result_item">
      <a href="<%=url%>"><%=title%>
        <p class="description">
          <%=description%>
        </p>
      </a>
    </script>
<script>
      (function(){
        var cache = {};

        this.tmpl = function tmpl(str, data){
          // Figure out if we're getting a template, or if we need to
          // load the template - and be sure to cache the result.
          var fn = !/\W/.test(str) ?
            cache[str] = cache[str] ||
              tmpl(document.getElementById(str).innerHTML) :

            // Generate a reusable function that will serve as a template
            // generator (and which will be cached).
            new Function("obj",
              "var p=[],print=function(){p.push.apply(p,arguments);};" +

              // Introduce the data as local variables using with(){}
              "with(obj){p.push('" +

              // Convert the template into pure JavaScript
              str
                .replace(/[\r\t\n]/g, " ")
                .split("<%").join("\t")
                .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                .replace(/\t=(.*?)%>/g, "',$1,'")
                .split("\t").join("');")
                .split("%>").join("p.push('")
                .split("\r").join("\\'")
            + "');}return p.join('');");

          // Provide some basic currying to the user
          return data ? fn( data ) : fn;
        };
      })();
    </script>
<script type="text/javascript">/* <![CDATA[ */(function(d,s,a,i,j,r,l,m,t){try{l=d.getElementsByTagName('a');t=d.createElement('textarea');for(i=0;l.length-i;i++){try{a=l[i].href;s=a.indexOf('/cdn-cgi/l/email-protection');m=a.length;if(a&&s>-1&&m>28){j=28+s;s='';if(j<m){r='0x'+a.substr(j,2)|0;for(j+=2;j<m&&a.charAt(j)!='X';j+=2)s+='%'+('0'+('0x'+a.substr(j,2)^r).toString(16)).slice(-2);j++;s=decodeURIComponent(s)+a.substr(j,m-j)}t.innerHTML=s.replace(/</g,'&lt;').replace(/>/g,'&gt;');l[i].href='mailto:'+t.value}}catch(e){}}}catch(e){}})(document);/* ]]> */</script></body>
</html>
