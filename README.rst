.. image:: https://raw.githubusercontent.com/Nekmo/python312-presentacion/master/logo.png
    :width: 100%

|

.. image:: https://img.shields.io/github/actions/workflow/status/Nekmo/python312-presentacion/build.yml?style=flat-square&maxAge=2592000&branch=master
  :target: https://github.com/Nekmo/python312-presentacion/actions?query=workflow%3ABuild
  :alt: Latest CI build status


=================================
¿Qué hay de nuevo en Python 3.12?
=================================

Presentación para `Python Málaga <https://www.meetup.com/es-ES/python_malaga/>`_ el día 16 de noviembre de 2023. Puedes
utilizar esta misma presentación, íntegra o con modificaciones para cualquiera de los usos descritos en la licencia
MIT adjunta en este proyecto.

La presentación está `disponible online <https://nekmo.github.io/python312-presentacion/>`_ ya compilada
para su visualización.

Para compilar desde el código fuente se requiere Python 3 instalado, estando probado sólo bajo Python 3.9. Se
recomienda ejecutar los siguientes pasos en un
`virtualenv <https://nekmo.com/es/blog/python-virtualenvs-y-virtualenvwrapper/>`_::

    # Clonar proyecto
    git clone https://github.com/Nekmo/python312-presentacion.git
    cd python312-presentacion
    # Instalar dependencias
    pip install -r requirements.txt
    # Compilar ficheros de estilos
    sassc _static/theme.scss _static/theme.css
    # Compilar presentación
    make revealjs

Tras la compilación puede verse los ficheros resultantes en el directorio ``_build``.


Copyright
=========
Licencia MIT. Ver fichero ``LICENSE.txt``.

Nekmo 2023.

