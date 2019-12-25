<?php
  if( session_start() && session_destroy() ){
      echo 1;
  }
else
    echo 0;
?>