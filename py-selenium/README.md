# Running Tests via Python

## Setup

```shell
python -m venv venv
. venv/bin/activate
pip install -U pip
pip install --requirement requirements.txt
```

## Run Tests

Make sure the dev server of your project is running.

```shell
npm run dev
```

While the dev server is active, execute the tests

```shell
pytest
```
