export const Footer=()=>{
    return(
        <>
        <footer class="footer bg-drak" id="foot">
  <div class="container">
    <div class="row">
      <div class="col-md-4 text-primary">
        <p>&copy; 2024 PETCY for pets</p>
      </div>
      <div class="col-md-4">
      <h3 className="text-danger">Contact us</h3>
        <ul class="list-inline">
          <li><a href="#" class="social-icon fab fa-twitter">+91-9856434711</a></li>
          <li><img src="gmail.png" className="col-1"/></li>
        </ul>
      </div>
      <div class="col-md-4">
        <nav class="nav">
          <ul>
            <li><a href="#">petcy@services.in</a></li>
            <li><a href="#">www.petcy.com</a></li>
            <li><a href="#">@petcyServices</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</footer>
        </>
    )
}