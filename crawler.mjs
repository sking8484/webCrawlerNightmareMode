import fetch from 'node-fetch'
import { JSDOM } from 'jsdom';

let crawler = async function(url) {

  console.log(url)
  let textData = await fetch(url)
  let text = await textData.text();
  let dom = new JSDOM(text);
  console.log(dom);

  console.log(dom.window.document.querySelectorAll('[href*=".com"]').forEach(link => console.log(link.href)))
}


crawler('https://en.wikipedia.org/wiki/S%26P_100')