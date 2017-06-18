# jscode
Convert keys of json based on the given mapper.

Example usage:
If we get compressed form of data from server. say {"n": {f: "Rinky", l: "G"}, "a": 15}
and we have a mapper for keys like {n: "name", a: "age", l: "lastName", f: "firstName"}

the function returns {"name": {firstName: "Rinky", lastName: "G"}, "age": 15}
