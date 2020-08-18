exports.infoNosotros = router.get('/nosotros',(req,res) =>{
    res.render('nosotros',{
        pagina: 'Sobre nosotros' //envia variable a vista
    }); //busca carpeta nosotros y carga por defecto archivo index
});