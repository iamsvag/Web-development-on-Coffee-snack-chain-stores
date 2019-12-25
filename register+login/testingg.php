<button class="open-button" onclick="openForm()">ΛΟΓΑΡΙΑΣΜΟΣ</button>
<div class="form-popup" id="myForm">
  <form  class="form-container">
      <p class="myemail"><?php session_start(); echo "{$_SESSION['login_email']}"; ?></p>
    <button type="submit" class="btn">Αποσύνδεση</button>
    <button type="button" class="btn cancel" onclick="closeForm()">Κλείσιμο</button>
  </form>
</div>