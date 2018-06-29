import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';




describe('our first test', ()=>{
  it('should pass',()=> {
    expect(true).to.equal(true);
  });
});



describe('index.html',function(){
  it('it should say hello',function(done){
    const index=fs.readFileSync('./src/index.html',"utf-8");  //This now holds index,html reference 
    jsdom.env(index,function(err,window){ //there is a ansyn call is here
      const h1=window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!"); 
      done();  //need to tell mocha that test is done and report the results 
      window.close();
    });
  })
})
