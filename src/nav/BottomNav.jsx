import "../App.css";
import TopNav from "./TopNav";

function BottomNav() {
  return (
    <nav>
    <div class="container">
    <ul>
    <li><a href="/">HOME</a></li>
    <li class="dropdown">
    <a href="services.php">SERVICES</a>
    <div class="dropdown-content">
    <a href="locked-keys-in-car-denver.php">CAR LOCKOUT</a>
    <a href="locked-out-of-house-denver.php">HOUSE LOCKOUT</a>
    <a href="locked-out-of-house-denver.php">BUSINESS LOCKOUT</a>
    <a href="lock-change-denver.php">LOCK CHANGE SERVICE</a>
    <a href="rekey-locks-denver.php">LOCK REKEY SERVICE</a>
    <a href="car-key-replacement-denver.php">CAR KEY REPLACEMENT</a>
    <a href="car-key-replacement-denver.php">KEY FOB REPLACEMENT</a>
    <a href="car-key-replacement-denver.php">CAR IGNITION PROBLEMS</a>
    <a href="services.php">MORE SERVICES</a>
    </div>
    </li>
    <li><a href="price.php">PRICES</a></li>
    <li><a href="./about.html">ABOUT</a></li>
    <li><a href="/blog">BLOG</a></li>
    <li><a href="contact.php">CONTACT</a></li>
    <li class="dropdown">
    <a href="services.php">SERVICE AREAS</a>
    <div class="dropdown-content">
    <a href="locksmith-littleton-co.php">LITTLETON, CO</a>
    </div>
    </li>
    
    </ul>
    <div class="clear"></div>
    </div>
    </nav> 
  );
}

export default BottomNav;
