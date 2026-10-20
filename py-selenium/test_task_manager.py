from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_page_header(driver):
    header = driver.find_element(By.CSS_SELECTOR, 'header h1')
    assert header.text == 'Student Task Manager'


def test_add_task_python(driver):
    input_box = driver.find_element(By.ID, 'task-input')
    input_box.clear()
    TEXT = 'Learn Python Pytest with Firefox'
    input_box.send_keys(TEXT)

    add_btn = driver.find_element(By.ID, 'add-btn')
    add_btn.click()

    # Wait until the new task appears
    task_item = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located(
            (By.XPATH, f'//span[contains(text(), "{TEXT}")]'))
    )
    assert task_item.is_displayed()
