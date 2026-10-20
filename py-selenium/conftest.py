import pytest
from selenium import webdriver
from selenium.webdriver.firefox.options import Options

@pytest.fixture(scope="session")
def driver():
    options = Options()
    # options.add_argument("-headless")

    driver = webdriver.Firefox(options=options)
    driver.implicitly_wait(5)
    driver.get("http://localhost:5173")

    yield driver

    driver.quit()
