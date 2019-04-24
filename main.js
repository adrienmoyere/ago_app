
var app=new Vue({
	el:'#app',
	data:{
  cart:0,
  p1:[1,"accusamus beatae ad facilis cum similique qui sunt","https://via.placeholder.com/600/92c952"],
  p2:[2,"reprehenderit est deserunt velit ipsam","https://via.placeholder.com/600/771796"],
  p3:[3,"officia porro iure quia iusto qui ipsa ut modi","https://via.placeholder.com/600/24f355"],
  p4:[4,"culpa odio esse rerum omnis laboriosam voluptate repudiandae","https://via.placeholder.com/600/d32776"],
  p5:[5,"natus nisi omnis corporis facere molestiae rerum in","https://via.placeholder.com/600/f66b97"],
  p6:[6,"accusamus ea aliquid et amet sequi nemo","https://via.placeholder.com/600/56a8c2"],
  p7:[7,"officia delectus consequatur vero aut veniam explicabo molestias","https://via.placeholder.com/600/b0f7cc"],
  p8:[8,"aut porro officiis laborum odit ea laudantium corporis","https://via.placeholder.com/600/54176f"],
  p9:[9,"qui eius qui autem sed","https://via.placeholder.com/600/51aa97"]
	},
	methods:{
	addToCart: function(){
		this.cart+=1;
	}
    }
})
