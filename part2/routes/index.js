exports.index = function(req, res){
  res.render('index', {title:'AJAX Testing'});
};

exports.gotcha = function(req, res){
  var val = req.query.search;
  console.log(val);
  res.send(val)
};
