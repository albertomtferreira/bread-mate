import "./footer.styles.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import { FaBootstrap } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-body-secondary">&copy;2024</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="https://twitter.com/albertoferreira"
                target="_blank"
              >
                <svg class="bi" width="24" height="24">
                  <FaTwitter />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="https://www.linkedin.com/in/albertomtferreira/"
                target="_blank"
              >
                <svg class="bi" width="24" height="24">
                  <FaLinkedin />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="https://github.com/albertomtferreira"
                target="_blank"
              >
                <svg class="bi" width="24" height="24">
                  <FaGithub />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
